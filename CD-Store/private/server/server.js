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



app.listen(config.port, function() { console.log("Server initiated on port", config.port); });
