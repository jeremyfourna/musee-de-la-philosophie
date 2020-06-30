// Tests for authors methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Authors } from './authors.js';
import './methods.js';

if (Meteor.isServer) {
  describe('authors methods', function () {
    beforeEach(function () {
      Authors.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['authors.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Authors.find().count(), 1);
    });
  });
}
