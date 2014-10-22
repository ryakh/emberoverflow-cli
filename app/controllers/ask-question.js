import Ember from 'ember';
import SetAuthor from '../mixins/set-author';

export default Ember.ArrayController.extend(SetAuthor, {
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

      this.setAuthorFor(question);

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