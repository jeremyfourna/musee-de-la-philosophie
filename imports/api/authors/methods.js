// Methods related to authors

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Authors } from './authors.js';

Meteor.methods({
  'authors.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Authors.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
