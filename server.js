console.log("SANITY CHECK");
// server.js
// SERVER-SIDE JAVASCRIPT
// top-level function exported by the express module
var express = require('express');
// app denotes the Express application
var app = express();
// server.js
var albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

var taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
//middleware function executed when base of rquested path matches path
app.use(express.static('public')); //know that this is accsessible 
app.use(express.static('vendor'));




app.use(function(req, res, next) {
  //
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //moves to next middleware
  next();
});
// gets the '/' and automatically runs the function;
app.get('/', function (req, res) {
  // console.log("THIS IS THE REQ:", req);
  // console.log("THIS IS THE RES", res);
  //sends the response as a string
  res.sendFile('views/index.html' , {root: __dirname});
});

//app.get method to get api from album object
app.get('/api/albums', function (req, res){
  res.json(albums);
});

//app listens for connections happening in the path;
//process.env.PORT is node environmnet or "development" if NODE-ENV is not set

app.get('/api/taquerias', function (req, res) {
  res.json(taquerias);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
