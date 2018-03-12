const path = require('path');

module.exports = function(events) {
  events.on('webpack-config', function(config) {
    config.resolveLoader.modules.push(path.resolve(__dirname, 'node_modules'));
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        configFile: path.resolve(process.cwd(), './.tsconfig.json'),
        compilerOptions: {
          experimentalDecorators: true,
          sourceMap: false
        }
      }
    });
  });
};
