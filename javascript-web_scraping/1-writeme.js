#!/usr/bin/node
/* script that writes a string to a file */

// Import the 'fs' module to work with the file system
const fs = require('fs');

// Get the file path and string from command line arguments
const path = process.argv[2];
const string = process.argv[3];

// Write the string to the file with utf-8 encoding
fs.writeFile(path, string, 'utf-8', (erreur) => {
  // Check if an error occurred while writing to the file
  if (erreur) { console.error(erreur); }
});
