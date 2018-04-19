var dialogflowAPI = require('./dialogflow');
var searchAPI = require('./search');
var express = require('express')
var bodyParser = require('body-parser')
var deasync = require('deasync');
var processor = require('compute')

// exports.handler = (event, context, callback) => {

var port = process.env.PORT||3000;
//Assign PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.get("/", function(req,res){

    res.send("Macy Server Online!")
  })

app.post("/brain", function(req,res){
  console.log("Event : " + JSON.stringify(req.body));
  processor.Process(req.body, function(response){
    res.send(response)
  })

})

app.listen(port)
console.log("Server Started at PORT : " + port);


    // callback(null, nluQueryClassifier);
// };
