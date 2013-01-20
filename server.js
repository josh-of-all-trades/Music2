var express = require('express'),
app = express();
app.use(express.static(__dirname));

var poop = 0;

app.get('/pushJSONtoServer', function(req, res) {
  var newJSON = req.query['track'];
  console.log(newJSON);
  console.log("Friend on Server");
  res.send('Hello, CRYBABY');
});

port = process.env.PORT || 5000;
app.listen(port);
console.log("Got this");