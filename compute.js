var dialogflowAPI = require('./dialogflow');
var searchAPI = require('./search');
var deasync = require('deasync');

module.exports = {
  "Process": function(body, callback){
    //Do something
    let nluQueryClassifier = deasync(function(callback){
                   dialogflowAPI.callDialogflow(event, callback);
                 })();
     callback(nluQueryClassifier)
  }
}
