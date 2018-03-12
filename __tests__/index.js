const plugin = require('../index');
const EventEmitter = require('promise-events');
const path = require('path');

let config;

describe('Modifies webpack config', () => {
  beforeAll(
    () =>
      new Promise(resolve => {
        config = {
          // mock webpack config
          resolveLoader: {
            modules: []
          },
          module: {
            rules: []
          }
        };

        let events = new EventEmitter();
        plugin(events);
        events.emit('webpack-config', config).then(() => resolve());
      })
  );

  test('adds module.rules', () => {
    expect(config.module.rules.length).toBe(1);
    expect(config.module.rules[0].loader).toBe('ts-loader');
  });

  test('adds plugins node_modules to resolveLoader', () => {
    expect(config.resolveLoader.modules.length).toBe(1);
    expect(config.resolveLoader.modules[0]).toBe(
      path.resolve(__dirname, '../node_modules')
    );
  });
});
