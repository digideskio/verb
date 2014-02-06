/**
 * phaser <https://github.com/jonschlinkert/phaser>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

// Node.js
var path = require('path');

// node_modules
var file = require('fs-utils');
var _ = require('lodash');

// Local libs
var utils = require('./utils');


exports.init = function (config, options, params) {
  var opts = _.extend({}, options);
  var fn = {};

  function extendConfig(filepath) {
    return _.extend({}, fn, require(filepath)(config, options, params));
  };

  utils.expand(['functions/*.js'], {cwd: __dirname}).map(function(filepath) {
    fn = extendConfig(filepath);
  });

  if(opts.functions) {
    if (_.isObject(opts.functions)) {
      fn = _.extend({}, fn, opts.functions);
    } else {
      fn = _.extend({}, fn, utils.arrayify(opts.functions));
      try {
        utils.expand(opts.functions).map(function(filepath) {
          fn = extendConfig(filepath);
        });
      } catch (e) {
        e.origin = __filename;
        console.warn('No functions found: (error code "' + e.code + '").', e.stack);
      }
    }
  }
  return fn;
};