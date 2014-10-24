import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: SignIn', {
  setup: function() {
    delete window.localStorage['userToken'];
    App = startApp();
    App.__container__.lookup('controller:application').set('currentUser.userToken', void 0);
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    delete window.localStorage['userToken'];
  }
});

test('visiting /sign-in', function() {
  visit('/sign-in');

  fillIn(".form-control", "tomster@hamster.com");
  click("button");

  andThen(function() {
    equal(
      find("p").text(),
      "You are already signed-in!",
      "Signed-in message rendered"
    );
  });
});
