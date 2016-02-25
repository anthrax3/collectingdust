// server.js
const port = process.env.PORT || '666';
const host = process.env.HOST || '0.0.0.0';
const Express = require('express');
const App = Express();

App.use(require('./app'));

App.listen(port, host);

console.log('Server running %s:%d...', host, port);

// module.exports = App;
