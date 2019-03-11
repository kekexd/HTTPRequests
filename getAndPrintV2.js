var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (requestOptions) {
  /* Add your code here */
  https.get(requestOptions, function (response) {
    if(response.statusCode !== 200) {
      callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
      return;
    }
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (chunk) {
      var temp = '';
      temp += chunk;
      console.log(temp + '\n');
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  }); //end of get
}; //end of function

getAndPrintHTML (requestOptions);

