import {Router, Request, Response, NextFunction} from 'express';

export class HeroRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.router.get('/', this.getAll);
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send({"value": "Hello, World!"});
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();

export default heroRoutes.router;
