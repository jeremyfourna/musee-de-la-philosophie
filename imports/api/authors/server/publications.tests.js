// Tests for the authors publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Authors } from '../authors.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('authors publications', () => {
  beforeEach(() => {
    Authors.remove({});
    Authors.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('authors.all', () => {
    it('sends all authors', done => {
      const collector = new PublicationCollector();
      collector.collect('authors.all', collections => {
        assert.equal(collections.authors.length, 1);
        done();
      });
    });
  });
});
