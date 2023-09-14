const express = require('express');
const next = require('next');
require('dotenv').config();


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  const start =  () => {
    try {
      server.listen(PORT, () => console.log(`::::::::...The server is running on the port: ${PORT}...::::::::`));
    } catch (err) {
      console.log('error start: ', err);
    }
  };
  start();
});
