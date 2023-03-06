import express from 'express';
import { myDataSource } from './data-source';
import setMiddlewares from './config/middlewares';
import { routes } from './config/routes';
const app = express();

app.listen(3000, () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log(`Data Source has been initialized`);
      console.log(`Server is running on port ${3000} `);
    })
    .catch((err) => {
      console.error(`Data Source initialization error`, err);
    });
});

setMiddlewares(app);
routes(app);
