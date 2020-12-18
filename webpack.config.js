'use strict';
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
const isProd = process.env.EASY_ENV === 'prod';
const pathDir = isProd ? 'inspire' : 'public';
const publicPath = isProd ? '/inspire/' : '/public/';

module.exports = {
  entry: {
    blog: 'app/web/page/blog/index.tsx',
    inspire: 'app/web/page/inspire/index.tsx',
    antd: 'app/web/page/antd/index.tsx',
    'demo/node': 'app/web/page/demo/node.tsx',
    'demo/async': 'app/web/page/demo/async.tsx',
  },
  output: { path: pathDir, publicPath: publicPath },
  resolve: {
    alias:{
      '@types': resolve('app/web/types'),
      '@utils': resolve('app/web/utils'),
      '@settings': resolve('app/web/settings'),
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component')
    }
  },
  module: {
    rules: [
      {
        less: {
          include: [resolve('app/web'), resolve('node_modules')],
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': 'red',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            }
          }
        }
      },
      {
        typescript: true
      }
    ],
  },
  plugins:[
    { imagemini: false }
  ]
};
