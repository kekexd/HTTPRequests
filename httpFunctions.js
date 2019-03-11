var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function (response) {
    if(response.statusCode !== 200) {
      callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
      return;
    }

    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      var temp = '';
      temp += chunk;
      //console.log(temp + '\n');
      callback(temp);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  }); //end of get
};


