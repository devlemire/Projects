var express = require('express'); //Express is our app
var bodyParser = require('body-parser'); //Body parser allows us to do req.body and see what's on it
var cors = require('cors'); //Cors allows us to make calls to an api on localhost, would fail without this
var request = require('request'); //Request allows us to make request calls to authenticator (Ex. Google/Facebook) and get back data from their servers
var massive = require('massive'); //Massive allows us to connect to our database
var jwt = require('jwt-simple'); //JWT allows us to make a token based on a randomized string secret
var moment = require('moment'); //Moment allows us to put a time stamp on when tokens will expire
var connectionString = "postgress://jameslemire@localhost/sandbox"; //postgres://yourusername@localhost/yourdatabase -- Tells massive which database to connect to
var massiveInstance = massive.connectSync({connectionString : connectionString}); //creates an instance of the connection to our database
var app = module.exports = express();  //export our app so other files can access db (database)
app.set('db', massiveInstance); //set 'db' to the instance of the connection to our database (massiveInstance)
var googleAuthCtrl = require('./controller/googleAuthCtrl.js'); //separate google authentication into its own controller
var facebookAuthCtrl = require('./controller/facebookAuthCtrl.js'); //separate facebook authentication into its own controller
var config = require('./config/config.js'); //store all private information in this file and hide it from github (YOU CAN BE SUED IF THIS INFORMATION GETS LEAKED INTO THE WRONG HANDS)

app.use(express.static('../../public')); //Tell the server to host our front end files
app.use(cors({origin: 'http://localhost:3000'})); //White list connections from our front end (allow them to work)
app.use(bodyParser.json()); //Parse the request body so we can do things with it

app.post('/auth/google/', googleAuthCtrl.googleAuth); //Create end point for Google Authentication
app.post('/auth/facebook/', facebookAuthCtrl.facebookAuth); //Create end point for Facebook Authentication

//Required for HTML5MODE, routes won't work without this. This sends the index.html file with the updated route everytime a route changes
app.all("/*", function(req, res) {
  res.sendFile("index.html", { root: "../../public" });
});

//Tell app to listen for incoming connections on port specified in config
app.listen(config.port, function() { console.log("Server initiated on port", config.port); });


// !!!!!!!! ------- EXPLANATION FOR GOOGLE AUTH IS THE SAME FOR FACEBOOK SO I ONLY ADDED COMMENTS ON THE GOOGLE ONE ------- !!!!!!!!
