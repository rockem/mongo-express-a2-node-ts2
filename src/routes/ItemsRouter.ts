import {Router, Request, Response, NextFunction} from "express";

export class ItemsRouter {
    router: Router;
    items: any[] = [];

    constructor() {
        this.router = Router();
        this.init();
        this.items = [];
    }

    public init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.add);
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        res.send(200, this.items)
    };

    public add = (req: Request, res: Response, next: NextFunction) => {
        this.items.push({name: req.body.value});
        res.send(201);
    }

}

// Create the ItemsRouter, and export its configured Express.Router
const itemsRouter = new ItemsRouter();

export default itemsRouter.router;
