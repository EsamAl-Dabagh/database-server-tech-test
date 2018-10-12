var express = require("express");

var app = express();

app.get("/set", function(req, res) {
  
  var value = Object.values(req.query);
  var key = Object.keys(req.query);

  var store = {};
  store[key] = value;
  res.send(`${key} stored`);
    

});

app.get("/get", function(req, res) {
  res.send("This is the set route");
})

app.listen(4000, function() {
  console.log("The server has been started, navigate to http://localhost:4000");
})