// The music-teach-assist file isn't saved to my github account
const admin = require('firebase-admin');
const serviceAccount = require('./music-teach-assist-firebase-adminsdk-78hm9-9d1c6641aa.json');

// Using the secret key in music-teach-assist, I'm using the 
// key so they know I'm authorized to change the database.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// I still haven't really figured out express much.
const express = require('express');
const app = express();
app.use(express.json());

// This give me the ability to change the database.
const db = admin.firestore();





// Set the new credentials, so I can login.
function setUser(username, password) {
  result = {
    username:username, 
    password:password};

  db.collection('Access').doc('docName').set(result);
}





// To get something back from the database, the "async" is required 
// And then I have to use "await" so I get back the promised data, or 
// I'll only get a promise of getting data.
async function seeTables() {
  collectionsList = [];

  const response = await db.listCollections().then(collections => {
    for (let collection of collections) {
      collectionsList.push(collection.id);
    }
  })

  return collectionsList;
}





// Returns True if the user put in a username and password that can be found.
// Returns False if the usernamer and password are not found.
async function login(username, password) {

  let can_login = false;

  const response = await db.collection('Access').doc('docName').get().then((credentials) => {
    if (username == credentials.data().username && password == credentials.data().password) {
      can_login = true;
    }
  })

  return can_login;
}




// The "call server" button on the webpage eventually calls
// localhost:3000/getData
app.get('/getData', (req, res) => {
    const assignment = {
      id:123,
      assignment:"listening assignment",
      url:"https://www.youtube.com/embed/YvZsOTJEUUc"
    }
    
    res.json(assignment);
})




// The "See Firebase Collections" button on the webpage eventually calls
// localhost:3000/getTables
app.get('/getTables', async (req, res) => {
  let tables = await seeTables()
  
  res.json(tables);
})




// The "Post Credentials to Server" button on the webpage eventually calls
// localhost:3000/postCred
app.post('/postCred', (req, res) => {

  let object = req.body;
  setUser(object.username, object.password);

  res.json(true);
});




// When the user trys logging in on the webpage, the webpage eventually calls the server
// localhost:3000/login
app.post('/login', async (req, res) => {

  let object = req.body;
  const canLogin = await login(object.username, object.password);

  res.json(canLogin);
})



app.listen(3000, (req, res) =>{
    console.log('Express API is running at port 3000');
})
