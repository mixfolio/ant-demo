const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#7367f0',
              '@border-radius-base': '4px',
              '@height-base': '40px',
              '@height-lg': '48px',
              '@height-sm': '32px'
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};