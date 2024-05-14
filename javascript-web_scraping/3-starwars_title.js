#!/usr/bin/node
/*  */

// Import the 'request' module to make HTTP requests
const request = require('request');
// URL of the SWAPI films API
const url = 'https://swapi-api.hbtn.io/api/films';

// Make a GET request to the SWAPI films API
request.get(url, (error, response, body) => {
  // Check if an error occurred during the request
  if (error) {
    console.error(`${error}`);
  } else {
    // Parse the JSON response body
    const data = JSON.parse(body);
    // Get the index of the film from command line argument
    const n = process.argv[2] - 1;
    // Print the title of the film at the specified index
    console.log(data.results[n].title);
  }
});
