// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Authors } from '../../api/authors/authors.js';
import { Books } from '../../api/books/books.js';

Meteor.startup(() => {
  if (Authors.find().count() === 0) {
    const data = [{
      "id": "author--1",
      "name": "John Rawls",
      "birthDate": "1921",
      "deathDate": "2002",
      "gender": "male",
      "nationality": "US",
      "description": ""
    }];

    data.forEach(link => Authors.insert(link));
  }

  if (Books.find().count() === 0) {
    const data = [{
      "id": "book--1",
      "name": "La justice comme équité",
      "subtitle": "Une reformulation de Théorie de la justice",
      "description": "",
      "authors": [{
          "id": "author--1"
      }],
      "releaseYear": "",
      "originalName": "Justice as Fairness, A Restatement"
    },{
      "id": "book--2",
      "name": "Théorie de la justice",
      "subtitle": "",
      "description": "",
      "authors": [{
          "id": "author--1"
      }],
      "releaseYear": "",
      "originalName": ""
    },{
      "id": "book--3",
      "name": "Justice et démocratie",
      "subtitle": "",
      "description": "",
      "authors": [{
          "id": "author--1"
      }],
      "releaseYear": "",
      "originalName": ""
    },{
      "id": "book--4",
      "name": "Libéralisme politique",
      "subtitle": "",
      "description": "",
      "authors": [{
          "id": "author--1"
      }],
      "releaseYear": "",
      "originalName": ""
    }];

    data.forEach(link => Books.insert(link));
  }
});
