import { Request, Response } from "express";
import { Resource } from "../models/Resource";

export default class ResourceControllers {
    static async search(req: Request, res: Response) {
        const { query } = req.params;
        console.log(query)
    }

    static async addResource(req: Request, res: Response) {

    }

    static async likeResource(req: Request, res: Response) {

    }
}