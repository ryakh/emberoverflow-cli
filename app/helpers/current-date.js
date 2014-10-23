import Ember from 'ember';

function currentDate(format) {
  return window.moment().format(format);
}

export {
  currentDate
};

export default Ember.Handlebars.makeBoundHelper(currentDate);
