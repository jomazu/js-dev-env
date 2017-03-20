// Call the Express web server
var express = require('express');
// Reference the route Path
var path = require('path');
// Open site in the browser
var open = require('open');

// Set the Port to use
var port = 3000;
// App creates an instance of Express
var app = express();

// Tell Express which routes it should handle.
// Any references to the root, should be handled by this function, which
// takes a request and response.
app.get('/', function(req, res) {
  // And in this function, we will call response.sendFile, and use path to join
  // dirname (current directory name) with a path to the source directory.
  // Note: the index.html file will be placed in the source directory.
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


// Tell Express we want it to listen on port 3000, defined above.
app.listen(port, function(err) {
  // If there is an error, just log that to the console.
  if (err) {
    console.log(err);
    // Otherwise open up the website and the port to hit.
  } else {
    open('http://localhost:' + port);
  }
});
