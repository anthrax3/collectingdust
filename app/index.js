// index.js
var Express = require("express");
var React = require("react");

var App = Express();

App.get('/', function(request, response){
  response.send("This is working.");
});

module.exports = App;
