const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  addWebpackExternals,
  setWebpackOptimizationSplitChunks,
} = require('customize-cra');
const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV === 'development';

console.log(isDevelopment);
console.log(path.resolve(__dirname, 'src/hooks'));

/*module.exports = override(
  setChunk
  setWebpackOptimizationSplitChunks({
    chunks: 'all',
  }),
  addWebpackAlias({
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@type': path.resolve(__dirname, 'src/type'),
  }),
  addWebpackPlugin(isDevelopment && new webpack.HotModuleReplacementPlugin()),
  addWebpackPlugin(isDevelopment && new ReactRefreshWebpackPlugin()),
  addWebpackPlugin(
    isDevelopment &&
      new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }),
  ),
);*/

module.exports = {
  webpack: function (config, env) {
    console.log(config);
    console.log(env);
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@type': path.resolve(__dirname, 'src/type'),
        },
      },
      output: {
        ...config.output,
        chunkFilename: 'static/js/[name].chunk.js',
      },
      plugins: [...config.plugins].concat(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        }),
      ),
    };
  },
};
