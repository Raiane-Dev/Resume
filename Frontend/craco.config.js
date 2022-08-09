const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#e0bc56',
              'dark': true
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};