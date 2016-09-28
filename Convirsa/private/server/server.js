var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors({origin: 'http://localhost:3000'}))
app.use(bodyParser.json());
app.use(express.static('../../public'));

app.get('*', function(req, res) {
  console.log('hit');
  res.sendFile('index.html', { root: '../../public' });
})

app.listen(3000, function() { console.log("Server initiated on port 3000") });
