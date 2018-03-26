const path = require('path');

module.exports = function() {
  require('ts-node').register({
    configFile: path.resolve(process.cwd(), './.tsconfig.json'),
    cache: true,
    compilerOptions: {
      module: 'commonjs',
      experimentalDecorators: true,
      sourceMap: false,
      target: 'es6'
    }
  });
};
