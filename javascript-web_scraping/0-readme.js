#!/usr/bin/node
/* print in console whats inside an error file, if this file cannot be read */

// Import the 'fs' module to work with files
const fs = require('fs');
// Get the file path from command line arguments
const cheminDuFichier = process.argv[2];
// Read the content of the file using 'fs.readFile'
fs.readFile(cheminDuFichier, 'utf8', callbackLectureFichier);

// Define the callback function for reading the file
function callbackLectureFichier (erreur, contenu) {
  // Check if an error occurred while reading the file
  if (erreur) {
    console.log(erreur);
  } else {
    console.log(contenu)
  }
}
