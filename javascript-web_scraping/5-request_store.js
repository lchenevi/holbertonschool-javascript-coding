#!/usr/bin/node
/* script that gets the contents of a webpage and stores it in a file */

// Import the required modules
const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const path = process.argv[3];

// Make a GET request to the provided URL using 'request.get'
request.get(url, (erreur, reponse) => {
  // Check if an error occurred during the request
  if (erreur) {
    console.error(erreur);
    return;
  }
  // Write the response body to the specified file path using 'fs.writeFile'
  fs.writeFile(path, reponse.body, 'utf-8', (err) => {
    // Check if an error occurred while writing to the file
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
});
