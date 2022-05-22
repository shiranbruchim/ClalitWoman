module.exports = api => {
  if (api) {
    api.cache(false);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            containers: './src/containers',
            hoc: './src/hoc',
            utils: './src/utils',
            pages: './src/pages',
            common: './src/common',
          },
          extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ios.js',
            '.android.js',
            '.ios.ts',
            '.android.ts',
            '.ts',
          ],
          cwd: 'babelrc',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
