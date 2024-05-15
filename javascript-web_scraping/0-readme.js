#!/usr/bin/node
/* script that reads and prints the content of a file. */
const fs = require('fs');

// Read the file specified in the command line arguments using fs.readFile
// The file path is provided as the third argument (index 2) in the argv array
fs.readFile(process.argv[2], 'utf8', function (err, data) {
  // Check if there's an error while reading the file
  if (err) console.log(err); else console.log(data);
});
