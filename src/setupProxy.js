const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  /*app.use(
    createProxyMiddleware('/3', {
      target: 'https://api.themoviedb.org/',
      changeOrigin: true,
    }),
  );*/
  app.use(
    createProxyMiddleware('/users', {
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/boxes', {
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
};
