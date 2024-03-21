import express from 'express';
import morgan from 'morgan';
import * as path from 'path';

import { heroRoute } from './routes/hero';

const port = process.env.PORT || 3333;

const app = express();

app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to my-express-api!' });
});

app.use('/api/hero', heroRoute);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
