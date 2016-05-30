import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('juxtapose-slider', 'Integration | Component | juxtapose slider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{juxtapose-slider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#juxtapose-slider}}
      template block text
    {{/juxtapose-slider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
