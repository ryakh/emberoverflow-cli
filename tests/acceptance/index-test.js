import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("index page has a title and a list of questions", function() {
  visit("/");

  andThen(function() {
    equal(
      find("h2").text(),
      "Welcome to Emberoverflow",
      "Application header is rendered"
    );

    notEqual(
      find("ul:not(.nav) > li").length,
      0,
      "There are questions in the list"
    );
  });
});

test("quesion links on index page lead to questions", function() {
  visit("/");
  click("ul:not(.nav) > li > a:first");

  andThen(function() {
    equal(
      find("h2").length,
      2,
      "Question header and application headers are rendered"
    );

    equal(
      find("p").length,
      3,
      "Question, author and edit link are rendered"
    );
  });
});