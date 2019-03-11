var https = require('https');

function getHTML (options, callback) {
  https.get(requestOptions, function (response) {
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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)