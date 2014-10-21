import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut: function() {
      delete localStorage['currentUser'];
      this.set('currentUser.userToken', void 0);
    }
  }
});