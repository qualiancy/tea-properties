/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.properties = require('../..');

/*!
 * Helper to load internals for cov unit tests
 */

function req (name) {
  return process.env.properties_COV
    ? require('../../lib-cov/properties/' + name)
    : require('../../lib/properties/' + name);
}

/*!
 * Load unexposed modules for unit tests
 */

global.__properties = {};
