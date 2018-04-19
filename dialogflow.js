var request = require('request');

module.exports = {
  'callDialogflow' : function(event, callback){
    var options = { method: 'POST',
      url: 'https://api.dialogflow.com/v1/query',
      qs: { v: '20150910' },
      headers:
       { 'Postman-Token': 'f029c9c7-9c2f-47f5-8fc0-659c152d5f7b',
         'Cache-Control': 'no-cache',
         Authorization: 'Bearer 2813de2980404cfca210ffe295e711fb',
         'Content-Type': 'application/json' },
      body: event,
      json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(null, body);
      //console.log(body);
    });
  }
}
