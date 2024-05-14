#!/usr/bin/node
/* script that writes a string to a file */

const fs = require('fs');

// Get the file path and content from command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write content to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  // Check if an error occurred while writing
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
    return;
  }
  // Print a success message if content was written successfully
  console.log(`Content has been written to ${filePath}`);
});
