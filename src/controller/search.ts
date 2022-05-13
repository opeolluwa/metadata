import { Request, Response } from "express";
export class SearchResult {
    /**
     * 
     * @param req get the query params
     * @param res render the page with result if match is found or render error if non is found
     */
    static async render(req: Request, res: Response) {
        const { keyword } = req.query;
        res.render("pages/search", { title: "search collection of images, icons, code blocks and illustrations", layout: "", query: keyword, results: "" });
    }
}
