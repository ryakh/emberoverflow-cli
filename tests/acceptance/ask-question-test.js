import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: AskQuestion', {
  setup: function() {
    App = startApp();
    App.__container__.lookup('controller:application').set('currentUser.userToken', 201);
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    delete window.localStorage['userToken'];
  }
});

test('visiting /ask-question', function() {
  visit('/ask-question');

  fillIn("#title", "Question title");
  fillIn("#question", "Question");
  click("button");

  fillIn("#answer", "Answer");
  click("button");

  andThen(function(){
    equal(
      find("h2:last").text(),
      "Question title",
      "Question title is rendered"
    );

    equal(
      find("p#question").text().replace(/\s+/g, ''),
      "Question",
      "Question is rendered"
    );

    notEqual(
      find(".panel").length,
      0,
      "New answer was added"
    );
    
    equal(
      find(".panel-body").text().replace(/\s+/g, ''),
      "Answer",
      "Question was answered"
    );
  });
});
