// Tests for the behavior of the authors collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Authors } from './authors.js';

if (Meteor.isServer) {
  describe('authors collection', () => {
    it('insert correctly', () => {
      const AuthorId = Authors.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Authors.find({ _id: AuthorId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'Authors');
      assert.equal(count, 1);
    });
  });
}
