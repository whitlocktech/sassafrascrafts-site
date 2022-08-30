## Whitlocktech-Mevn Stack

---

<table><tbody><tr><td>Backend Packages Used</td><td>Frontend Packes Used</td></tr><tr><td><ul><li>bcryptjs</li><li>cookie-session</li><li>cors</li><li>dotenv</li><li>express</li><li>jsonwebtoken</li><li>mongodb</li><li>mongoose</li><li>uuid</li></ul></td><td>Not yet Implemented</td></tr><tr><td>Dev Packages</td><td>&nbsp;</td></tr><tr><td>nodemont</td><td>&nbsp;</td></tr></tbody></table>

### This is my Mevn Stack

This is going to be the basis of my other sites that i am currently working on building.  
Currently implemented is:

*    [x]  Backend User authentication with JWT
*    [x]  Middleware that checks for user role
*    [x]  Configurable environmental variables in .env file

---

### Implemented Routes

*   /api/auth/signup  
    This is the basic signup api that will check to see if the Username or email exists already and also check to see if the role assigned to the user exists.
*   /api/auth/signin  
    This endpoint lets you sign in
*   /api/auth/refreshtoken  
    This one controls the refresh token
*   /api/test/all  
    This endpoint is open to anyone. So best to use on the front end like blog everyone can view.
*   /api/test/user  
    This endpoint is restricted to signed-in users
*   /api/test/mod  
    This endpoint is restricted to signed-in moderators
*   /api/test/admin  
    This endpoint is restricted to signed-in admins

These endpoints are examples and will be further expanded to actual endpoints in the applications that will be built with it.