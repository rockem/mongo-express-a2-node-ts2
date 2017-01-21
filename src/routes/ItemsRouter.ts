import {Router, Request, Response, NextFunction} from "express";
import * as item from "./Item";

export class ItemsRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.add);
        this.router.delete('/', this.deleteAll)
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        item.Item.find({}).exec((err, result) => {
           res.send(200, result)
        });
    };

    public add = (req: Request, res: Response, next: NextFunction) => {
        new item.Item({title: req.body.value}).save();
        res.sendStatus(201);
    };

    public deleteAll = (req: Request, res: Response, next: NextFunction) => {
        item.Item.remove({}, () => {
            res.sendStatus(200);
        });
    };

}

// Create the ItemsRouter, and export its configured Express.Router
const itemsRouter = new ItemsRouter();

export default itemsRouter.router;
