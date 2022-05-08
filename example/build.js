const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')
const config = defaults.__get__('config')

/**
 * Do not mangle component names in production
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#disable-function-name-mangling
 */
config.optimization.minimizer[0].options.extractComments = false
config.optimization.minimizer[0].options.minimizer.options = true
config.optimization.minimizer[0].options.minimizer.options = true

// Force development env
config.plugins[4].definitions['process.env'].NODE_ENV = '"development"'
config.mode = 'development'
