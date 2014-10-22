import Ember from 'ember';

export default Ember.Mixin.create({
  setAuthorFor: function(object) {
    this.get('currentUser.user').then(function(user) {
      object.set('author', user);
    });
  }
});
