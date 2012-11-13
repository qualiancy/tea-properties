module.exports = process.env.properties_COV
  ? require('./lib-cov/properties')
  : require('./lib/properties');
