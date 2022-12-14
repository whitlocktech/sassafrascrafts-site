## Whitlocktech-Mevn Stack

---

<table><tbody><tr><td>Backend Packages Used</td><td>Frontend Packes Used</td></tr><tr><td><ul><li>bcryptjs</li><li>cookie-session</li><li>cors</li><li>dotenv</li><li>express</li><li>jsonwebtoken</li><li>mongodb</li><li>mongoose</li><li>uuid</li></ul></td><td><ul><li>fortawesome/fontawesom-svg-core</li><li>fortawesome/free-solid-svg-icons</li><li>fortawesom/vue-fontawesome</li><li>axios</li><li>bootstrap</li><li>core-js</li><li>jquery</li><li>popper.js</li><li>vee-validate</li><li>vue 3</li><li>vuex</li><li>yup</li></ul></td></tr><tr><td>Dev Packages</td><td>Dev packages</td></tr><tr><td>nodemon</td><td><p>babel</p><p>eslint</p></td></tr></tbody></table>

### This is my Mevn Stack

This is going to be the basis of my other sites that i am currently working on building.  
Currently implemented is:

*   [x] Backend User authentication with JWT
*   [x] Middleware that checks for user role
*   [x] Added api documentation generator
*   [x] Configurable environmental variables in .env file
*   [x] Frontend Deployed(this is a demo template to build other stuff from) thank you Bezkoder

---

### Implemented Routes

*   /api/auth/signup  
    This is the basic signup api that will check to see if the Username or email exists already and also check to see if the role assigned to the user exists.
*   /api/auth/signin  
    This endpoint lets you sign in
*   /api/auth/refreshtoken  
    This one controls the refresh token
*   /api/test/all  
    This endpoint is open to anyone. So best to use for the frontend like blog everyone can view.
*   /api/test/user  
    This endpoint is restricted to signed-in users
*   /api/test/mod  
    This endpoint is restricted to signed-in moderators.
*   /api/test/admin  
    This endpoint is restricted to signed-in admins

These endpoints are examples and will be further expanded to current endpoints in the applications that will be built with it.

The api documentation is located in index.html under backend/public/docs/

I will work on adding a way to view it when the server is running.

---

### RoadMap

*   [ ] Add SSO support
*   [ ] Add the ability to upload things like pictures
*   [ ] Add nodemailer to support smtp
*   [ ] Add more default endpoints to the restAPI

This is a learning repository for me. I welcome all advice and examples of how to do things better. If you know how to implement things on the RoadMap, or have ideas about other things that I should include in this, please let me know. I will also accept PRs to update things. I just ask that you please either document it with comments or include a .md file that explains what is going on and how it works.  
Thanks,

Whitlocktech

---

### Deployment

To deploy this stack as is you have to copy the .env.example to .env in the backend folder.  
then run npm run dev in the backend folder and npm run serve in the front end.