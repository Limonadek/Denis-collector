module.exports = {
    root: './src',
    buildOptions: {
        out: './dist'
    },
    plugins: [
      '@snowpack/plugin-dotenv',
      '@snowpack/plugin-babel',
      '@snowpack/plugin-webpack',
    ],
    packageOptions: {
      polyfillNode: true,
    },
  };