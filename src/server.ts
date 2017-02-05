import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import NamesRouter from "./routes/ItemsRouter";
import path = require('path');

// Creates and configures an ExpressJS web server.
class server {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/*', (req, res, next) => {
      res.sendFile(path.resolve(__dirname, 'public/index.html'));
    });
    this.express.use('/api/v1/items', NamesRouter);

    this.express.use('/app', express.static(path.resolve(__dirname, 'public/app')));
    this.express.use('/libs', express.static(path.resolve(__dirname, 'public/libs')));
    this.express.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
    this.express.use(express.static(path.resolve(__dirname, 'public')));
  }

}

export default new server().express;
