import Ember from 'ember';

export default Ember.ArrayController.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date());
  }.property()
});
