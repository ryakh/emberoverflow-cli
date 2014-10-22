import Ember from 'ember';
import SetAuthorMixin from 'emberoverflow-cli/mixins/set-author';

module('SetAuthorMixin');

// Replace this with your real tests.
test('it works', function() {
  var SetAuthorObject = Ember.Object.extend(SetAuthorMixin);
  var subject = SetAuthorObject.create();
  ok(subject);
});
