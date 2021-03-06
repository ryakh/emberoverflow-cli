import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('sign-in');
  this.route('ask-question');

  this.resource('questions', function() {
    this.resource('question', { path: '/:question_id' });
  });
});

export default Router;