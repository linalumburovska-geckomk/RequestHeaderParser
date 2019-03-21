
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
  let ip = req.headers['x-forwarded-for'].split(",")[1];  
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  res.json({"ip": ip, "language": language, "software": software});
});




app.listen(3000, function () {
  console.log('Your app is listening on port 3000');
});