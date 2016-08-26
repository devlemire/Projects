var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var stripe = require('stripe');
var nodemailer = require('nodemailer');
var config = require('./config/config.js');
var app = express();

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../../public'));

app.post('/api/charge', function(req,res) {
  console.log('INCOMING PURCHASE', req.body);
  // Get the credit card details submitted by the form
  var token = req.body.stripeToken; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
   amount: 1000, // Amount in cents
   currency: "usd",
   source: token,
   description: "Example charge"
  }, function(err, charge) {
   if (err && err.type === 'StripeCardError') {
     // The card has been declined
   } else {
     // Store order status
     res.status(200).send(charge);
   }
 });
});

app.listen(config.port, function() { console.log("Server initiated on port", config.port); });
