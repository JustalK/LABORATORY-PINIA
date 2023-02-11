module.exports = {
  displayName: 'app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/app',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/app/tsconfig.spec.json',
      babelConfig: 'apps/app/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/app/tsconfig.spec.json',
      babelConfig: 'apps/app/babel.config.js',
    },
  },
};
