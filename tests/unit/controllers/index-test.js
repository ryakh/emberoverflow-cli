import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('siteTitle returns correct value', function() {
  var controller = this.subject();
  equal(controller.get('siteTitle'), 'Welcome to Emberoverflow');
});

test('currentTime returns Date object', function() {
  var controller = this.subject();
  equal(controller.get('currentTime') instanceof Date, true);
});