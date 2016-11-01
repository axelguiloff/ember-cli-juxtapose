/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-juxtapose',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/juxtapose/build/js/juxtapose.js');
    app.import(app.bowerDirectory + '/juxtapose/build/css/juxtapose.css');
  }
};
