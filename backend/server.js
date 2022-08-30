import express, { response } from 'express'
import { MongoClient } from 'mongodb'
import { v4 as uuid } from 'uuid'
import cors from 'cors'

const startServer = async () =>{
    const app = express()
    app.use(cors())
    app.use(express.json)

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



    // need to remove hardcoded port
    app.listen(8000, () => console.log('Server is Listening on port 3000'))
}
startServer()