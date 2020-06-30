// All books-related publications

import { Meteor } from 'meteor/meteor';
import { Books } from '../books.js';

Meteor.publish('books.all', () => {
  return Books.find();
});
