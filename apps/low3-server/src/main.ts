/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Server } from 'socket.io';
import * as http from 'http';
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to low3-server!' });
});

const port = process.env.port || 3333;
// const websocketPort = Number(process.env.wport) || 3334;
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('connect');
  socket.on('message', (m) => console.log(m));
  socket.on('disconnect', () => console.log('disconnect'));
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
