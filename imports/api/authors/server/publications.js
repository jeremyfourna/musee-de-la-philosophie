// All authors-related publications

import { Meteor } from 'meteor/meteor';
import { Authors } from '../authors.js';

Meteor.publish('authors.all', () => {
  return Authors.find();
});
