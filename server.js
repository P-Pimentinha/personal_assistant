import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import compression from 'compression';

//error handling
import 'express-async-errors';

//routers
import weatherRouter from './routes/weatherRoute.js';
import wordsRouter from './routes/wordsRouters.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

app.use(express.json());
app.use(compression());

app.use('/api/v1/weather', weatherRouter);
app.use('/api/v1/words', wordsRouter);

//error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
