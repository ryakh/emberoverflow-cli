import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: true,

  latestQuestions: function() {
    return this.slice(0,3);
  }.property('@each'),

  actions: {
    askQuestion: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        question: this.get('question'),
        date: new Date()
      });

      this.get('currentUser.user').then(function(user) {
        question.set('author', user);
      });

      var controller = this;

      question.save().then(function(question) {
        controller.setProperties({
          title: '',
          question: ''
        });

        controller.transitionToRoute('question', question);
      });
    }
  }
});