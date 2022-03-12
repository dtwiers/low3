/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { EMPTY_ENTITY_STATE } from '@brandingbrand/cargo-hold';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import { defaultLow3Bar, Low3State } from './api-state';
const app = express();

const defaultState: Low3State = {
  presets: EMPTY_ENTITY_STATE,
  visible: false,
  active: defaultLow3Bar,
};

app.post('/api/blob', (req, res) => {
  req.pipe(fs.createWriteStream(`${__dirname}/state.json`, { flags: 'w' }));
  res.status(201).send(req.body);
});

app.get('/api/blob', (req, res) => {
  try {
    res.send(fs.readFileSync(`${__dirname}/state.json`));
  } catch (e) {
    res.send(defaultState);
  }
});

const port = process.env.port || 3333;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
