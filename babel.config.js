module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@screens': './src/screens',
          '@controls': './src/controls',
          '@icons': './src/controls/Icons',
          '@components': './src/components',
          '@utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
