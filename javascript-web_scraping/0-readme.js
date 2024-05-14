#!/usr/bin/node
/* print in console whats inside an error file, if this file cannot be read */

const fs = require('fs');
const cheminDuFichier = process.argv[2];
fs.readFile(cheminDuFichier, 'utf8', callbackLectureFichier);

function callbackLectureFichier (erreur, contenu) {
  if (erreur) {
    console.log(erreur);
  } else {
    console.log(contenu)
  }
}
