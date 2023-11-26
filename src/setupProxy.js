const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://pokeapi.co',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/users', {
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
};
