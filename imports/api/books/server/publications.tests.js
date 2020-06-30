// Tests for the books publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Books } from '../books.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('books publications', () => {
  beforeEach(() => {
    Books.remove({});
    Books.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('books.all', () => {
    it('sends all books', done => {
      const collector = new PublicationCollector();
      collector.collect('books.all', collections => {
        assert.equal(collections.Books.length, 1);
        done();
      });
    });
  });
});
