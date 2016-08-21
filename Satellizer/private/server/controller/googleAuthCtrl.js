//Require all necessary items, app, config (for secrets and keys), request (to get info from authenticator's servers),
//moment (set expiration time on jwt tokens), jwt-simple (to create jwt tokens), and db to run db queries
var app = require('../server.js');
var config = require('../config/config.js');
var request = require('request');
var moment = require('moment');
var jwt = require('jwt-simple');
var db = app.get('db');

module.exports = {
  googleAuth: function(req, res) {
    // console.log("INCOMING CONNECTION:", {reqBody: req.body});

    //This function creates a JWT token being passed the unique profile id (Ex, Google: profile.sub) Don't forget to make a token secret
    //In your config (a random string, like making a session secret)
    function createJWT(user) {
      var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
      };
      return jwt.encode(payload, config.TOKEN_SECRET);
    }

    var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
    var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
    var params = {
     code: req.body.code,
     client_id: req.body.clientId,
     client_secret: config.GOOGLE_SECRET,
     redirect_uri: req.body.redirectUri,
     grant_type: 'authorization_code'
    };

    request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
       var accessToken = token.access_token;
       var headers = { Authorization: 'Bearer ' + accessToken };

       request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
        //  console.log("INFORMATION GATHERED:", {
        //    profile: profile
        //  });
         if (profile.error) {
           console.log(profile.error.message);
           return res.status(500).send({message: profile.error.message});
         }
         //Line 12 - 46 is what you copy from the examples on satellizer. You have to look for it in their large server.js file
         //Everything below is logic we add ourselves to manipulate profile data
         else {
           //Run getUsers query, which checks to see if we have a user in our database with a google id
           db.queries.getUsers([profile.sub], function(err, r) {
             if(r.length === 0) {
               //If the response comes back empty, that means it is the first time the user has logged onto our site. Let's add him/her to the database
               //Create New User
               console.log("NEW USER FOUND, GOOGLE_ID:", profile.sub);
               db.queries.createUser([profile.given_name, profile.family_name, profile.email, profile.picture, profile.sub], function(err, r) {
                 console.log(r);
                 res.status(200).send('OK');
               });
             } else {
               //Otherwise the user has been on our site before and we have already stored his/her information, simply return the response and you're done
               //User Already Exsists
               console.log("USER LOGGED IN", r);
              //  r[0].token = createJWT(profile.sub);
               res.json({user: r, token: createJWT(profile.sub)});
             }
           });
         }
       });
     });
  }
};
