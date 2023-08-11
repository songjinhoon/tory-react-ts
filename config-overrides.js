const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  addWebpackAlias({
    '@hook': path.resolve(__dirname, 'src/hook'),
    '@component': path.resolve(__dirname, 'src/component'),
    '@layout': path.resolve(__dirname, 'src/layout'),
    '@page': path.resolve(__dirname, 'src/page'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@typing': path.resolve(__dirname, 'src/typing'),
  }),
  addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true })),
);
