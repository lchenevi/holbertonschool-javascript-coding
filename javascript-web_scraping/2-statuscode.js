#!/usr/bin/node
/* script that display the status code of a GET request */

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the URL from command line arguments
const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (erreur, reponse) => {
  // Check if an error occurred during the request
  if (erreur) {
    console.log('code: 404');
  } else {
    console.log(`code: ${reponse.statusCode}`);
  }
});
