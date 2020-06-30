// Tests for the behavior of the books collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Books } from './books.js';

if (Meteor.isServer) {
  describe('books collection', () => {
    it('insert correctly', () => {
      const BookId = Books.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Books.find({ _id: BookId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'books');
      assert.equal(count, 1);
    });
  });
}
