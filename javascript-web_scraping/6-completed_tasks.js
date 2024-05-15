#!/usr/bin/node
/* script that computes the number of tasks completed by user id. */
const request = require('request');

// Retrieve the URL from command line argument
const url = process.argv[2];

// Make a GET request to the provided URL
request(url, { json: true }, (erreur, response) => {
  // Handle any errors that occur during the request
  if (erreur) {
    console.error(erreur);
  } else {
    const completedByUser = {};
    // Iterate through each task in the response body
    for (const task in response.body) {
      // Check if the task is completed
      if (response.body[task].completed === true) {
        completedByUser[response.body[task].userId] = (completedByUser[response.body[task].userId] || 0) + 1;
      }
    }
    // Log the object containing the count of completed tasks by user ID
    console.log(completedByUser);
  }
});
