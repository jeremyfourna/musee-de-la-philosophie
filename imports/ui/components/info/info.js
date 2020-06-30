import { Authors } from '/imports/api/authors/authors.js';
import { Books } from '/imports/api/books/books.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('authors.all');
  Meteor.subscribe('books.all');
});

Template.info.helpers({
  authors() {
    return Authors.find({});
  },
  books() {
    return Books.find({});
  },
});

Template.info.events({
  'submit .info-author-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('authors.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
  'submit .info-book-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('books.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
