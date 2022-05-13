import { Request, Response } from "express";
export class Explore {
    /**
     * 
     * @param req get the query params
     * @param res render the page with result if match is found or render error if non is found
     */
    static async render(req: Request, res: Response) {
        return res.render("pages/explore", { title: "explore collection of images, icons, code blocks and illustrations", });
    }
}
