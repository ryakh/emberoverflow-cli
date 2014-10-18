import Ember from 'ember';

export default Ember.Controller.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date());
  }.property()
});
