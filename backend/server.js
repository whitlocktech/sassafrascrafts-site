import express, { response } from 'express'
import { MongoClient } from 'mongodb'
import { v4 as uuid } from 'uuid'
import cors from 'cors'

const startServer = async () =>{
    const app = express()
    app.use(cors())
    app.use(express.json())

    //need to remove hard coded address and add whatever security mongo has to secure the connection
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        maxPoolSize: 10,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    // need to remove hardcoded db name
    const db = client.db('dashboard')

    app.get('/api/links', async (req, res) => {
        const links = await db.collection('links').find({}).toArray()
        res.json(links) 
    })

    app.get('/api/bookmarks', async (req, res) => {
        const bookmarks = await db.collection('bookmarks').find({}).toArray()
        res.json(bookmarks)
    })

    app.post('/api/links', async (req, res) => {
        const { name, address, adminAddress, category } = req.body

        await db.collection('links').insertOne({

            name,
            address,
            adminAddress,
            category,
        });

        const links = await db.collection('links').find({}).toArray()

        res.json(links)
    });

    app.post('/api/bookmarks', async (req, res) => {
        const { name, address, adminAddress, category, note } = req.body

        await db.collection('bookmarks').insertOne({
            id: uuid(),
            name,
            address,
            adminAddress,
            category,
            note,
        })
        const bookmarks = await db.collection('bookmarks').find({}).toArray()
        res.json(bookmarks)
    })

    app.put('/api/links/:name', async (req, res) => {
        const { name: linkName } = req.params
        const { name, address, adminAddress, category } = req.body

        const link = await db.collection('links').findOne({ name: linkName })
       
        link.name = name || link.name
        link.address = address || link.address
        link.adminAddress = adminAddress || link.adminAddress
        link.category = category || link.category

        await db.collection('links').updateOne({ name: linkName }, {
            $set: link,
        })

        const updatedLink = await db.collection('links').find({}).toArray()

        res.json(updatedLink)
    })
    app.put('/api/bookmarks/:id', async (req, res) => {
        const { id: bookMarkId } = req.params
        const { name, address, adminAddress, category, note } = req.body

        const bookmark = await db.collection('bookmarks').findOne({ name: bookMarkId })

        bookmark.name = name || bookmark.name
        bookmark.address = address || bookmark.address
        bookmark.adminAddress = adminAddress || bookmark.adminAddress
        bookmark.category = category || bookmark.category
        bookmark.note = note || bookmark.note 

        await db.collection('bookmarks').updateOne({ name: bookMarkId }, {
            $set: bookmark,
        })

        const updatedBookmark = await db.collection('bookmarks').find({}).toArray()

        res.json(updatedBookmark)
    })

    // need to remove hardcoded port
    app.listen(8000, () => console.log('Server is Listening on port 8000'))
}
startServer()