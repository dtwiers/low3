/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
const app = express();

app.post('/api/blob', (req, res) => {
  req.pipe(fs.createWriteStream(`${__dirname}/state.json`, { flags: 'w' }));
  res.status(201).send(req.body);
});

app.get('/api/blob', (req, res) => {
  try {
    res.send(fs.readFileSync(`${__dirname}/state.json`));
  } catch (e) {
    res.send({});
  }
});

const port = process.env.port || 3333;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
