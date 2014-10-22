import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  date: DS.attr('date'),
  author: DS.belongsTo('user', { async: true })
});
