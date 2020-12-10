const express = require('express')
const http = require('http')

let app = express();

const root = require('path').join(__dirname, 'dist');
app.use(express.static(root));

app.get('/test', (req, res) => {
  res.send('Hello from server.js')
})

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

// Start http server
const HTTP_PORT = 5000;
http
  .createServer(app)
  .listen(HTTP_PORT, () =>
    console.log(`http server listening on port ${HTTP_PORT}`)
  );
