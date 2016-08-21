var app = require('../server.js');
var db = app.get('db');
var request = require('request');
var config = require('../config/config.js');

module.exports = {
  facebookAuth: function(req, res) {
      var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
      var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
      var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

      var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: config.FACEBOOK_SECRET,
        redirect_uri: req.body.redirectUri
      };

    request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: accessToken.error.message });
      }

      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (response.statusCode !== 200) {
          return res.status(500).send({ message: profile.error.message });
        } else {
          console.log('INFORMATION GATHERED:', profile);
        }
      });
    });
  }
};
