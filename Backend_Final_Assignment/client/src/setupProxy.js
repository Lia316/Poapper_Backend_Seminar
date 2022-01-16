const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/study', {
            target: 'http://158.247.222.148:8080',
            changeOrigin: true
        })
    )
}