import { Request, Response } from "express";
import { Resource } from "./../models/Resource";
export class Explore {
    static async render(req: Request, res: Response) {
        const resourceList = ["animation", "gradient", "css code generator", "design inspiration", "icon libraries", "image", "javascript Ui Library", "svg", "illustration", "workaround"]
        const randomResourceCategory = Math.floor(Math.random() * resourceList.length);
        const resourceCategory = resourceList[randomResourceCategory];

        const response = await Resource.find({ category: { $in: [resourceCategory.toLowerCase()] } })
        const content = response

        res.render("pages/explore", { title: "explore collection of images, icons, code blocks and illustrations", layout: "", content, category: resourceCategory.replaceAll("-", " ") });
    }
}
