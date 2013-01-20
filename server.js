var express = require('express'),
app = express();
app.use(express.static(__dirname));

app.get('/test', function(req, res) {
  res.send("Hello Friend!");
});

port = process.env.PORT || 5000;
app.listen(port);
console.log("Got this");