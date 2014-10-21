import Ember from 'ember';

export default Ember.Object.extend({
  userToken: localStorage['userToken'],

  isSignedIn: function() {
    return this.get('userToken') !== void 0;
  }.property('userToken')
});