const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  addWebpackAlias({
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@type': path.resolve(__dirname, 'src/type'),
  }),
  addWebpackPlugin(
    new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }),
  ),
);
