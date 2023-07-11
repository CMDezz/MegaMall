module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@screens': './src/screens',
          '@controls': './src/controls',
          '@icons': './src/controls/Icons',
          '@components': './src/components',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
