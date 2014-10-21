import Ember from 'ember';
import currentUser from '../models/current-user';

export var initialize = function(container) {
  currentUser.reopen({
    user: function() {
      var userToken = this.get('userToken');
      
      if (!Ember.isEmpty(userToken)) {
        return container.lookup('store:main').find('user', userToken);
      }
    }.property('userToken')
  });
};

export default {
  name: 'current-user',
  after: 'application',

  initialize: initialize
};