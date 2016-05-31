import Ember from 'ember';
/* global juxtapose */

export default Ember.Component.extend({
  /**
   * Controls the animation of the slider bar
   * @type {Boolean}
   */
  animate: true,

  /**
   * Shows the credits
   * @type {Boolean}
   */
  showCredits: false,

  /**
   * Shows the labels on the images
   * @type {Boolean}
   */
  showLabels: true,

  /**
   * Sets the default slider starting position
   * @type {String}
   */
  startingPosition: '50%',

  /**
   * Adds the juxtapose class to the wrapper
   * @type {Array}
   */
  classNames: ['juxtapose'],

  /**
   * Sets the bindings for the element attributes used for configuration
   * @type {Array}
   */
  attributeBindings: ['animate:data-animate', 'showCredits:data-showcredits', 'showLabels:data-showlabels', 'startingPosition:data-startingposition'],

  /**
   * Initializes the slider when the component is inserted
   */
  didInsertElement() {
    this._super(...arguments);
    if (!this.get('beforeImageUrl') || !this.get('afterImageUrl')) {
      Ember.Logger.warn('Component juxtapose-slider requires both a beforeImageUrl and afterImageUrl');
    }
    juxtapose.makeSlider(this.$()[0]);
  }
});
