import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('string'),
  email: DS.attr('string'),
  question: DS.hasMany('question', { async: true })
});
