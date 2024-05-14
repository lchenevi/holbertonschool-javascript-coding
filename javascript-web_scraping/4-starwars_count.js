#!/usr/bin/node
/* script that prints the number of movies where the character “Wedge Antilles” is present */

// Import the 'request' module for making HTTP requests
const request = require('request');
// Get the URL from command line arguments
const url = process.argv[2];

// Make a GET request to the provided URL using 'request.get'
request.get(url, (error, response, body) => {
  // Check if an error occurred during the request
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    // Initialize a count variable to count characters with ID '18'
    let count = 0;
    // Loop through each film in the response data
    for (const film of data.results) {
      // Loop through each character in the 'characters' array of the film
      for (const character of film.characters) {
        // Check if the character URL contains '18'
        if (character.includes('18')) {
          // If the character ID is '18', increment the count
          count++;
        }
      }
    }
    // Print the count of characters with ID '18'
    console.log(count);
  }
});
