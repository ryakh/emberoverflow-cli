import Ember from 'ember';
import SetAuthor from '../mixins/set-author';

export default Ember.ObjectController.extend(SetAuthor, {
  actions: {
    answerQuestion: function() {
      var answer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        question: this.get('model'),
        date: new Date()
      });

      this.setAuthorFor(answer);

      var controller = this;

      answer.save().then(function(answer) {
        controller.get('model.answers').addObject(answer);

        controller.setProperties({
          answer: ''
        });
      });
    }
  }
});
