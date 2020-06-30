// Tests for books methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Books } from './books.js';
import './methods.js';

if (Meteor.isServer) {
  describe('books methods', function () {
    beforeEach(function () {
      Books.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['books.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Books.find().count(), 1);
    });
  });
}
