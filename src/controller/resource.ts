import { Request, Response } from "express";
import { Resource, RESOURCE_CATEGORIES } from "../models/Resource";
const isValidURL = require("url-validator")
export class ResourceControllers {
    static async search(req: Request, res: Response) {
        const { query } = req.params;
        console.log(query)
    }


    static async addResource(req: Request, res: Response) {
        /**
         * get the resource details from the frontend,
         * parse, validate and store it
         */

        const { name, description, url, category } = req.body
        const { username, user_id } = req.session.user;

        //validate the request
        /*  const error = {
             name: "",
             description: "",
             url: "",
             category: ""
         };
 
         if (!name) {
             error.name = "Please provide a name"
         }
         if (!description) {
             error.description = "Please provide a description"
         }
         if (!url) {
             error.url = "missing resource url"
         }
         if (url && !isValidURL(url)) {
             error.url = "Invalid URL"
         }
         if (Object.values(RESOURCE_CATEGORIES).includes(category)) {
             error.category = `invalid category, please use one of: ${Object.values(RESOURCE_CATEGORIES).join(", ")}`
         }
         //check for errors and send in error report if any
         if (!Object.values(error).every(e => e === "")) {
             return res.render("pages/dashboard", { title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES) });
         }
  */
        try {
            const { name, description, url, category } = req.body
            const { username, user_id } = req.session.user;
            
            // see if name already exist 
            // const resourceExists = await Resource.find({ name })
           /*  if (resourceExists) {
                return res.render("pages/dashboard", {
                    title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES), serverResponse: {
                        message: `${name} already exists`,
                        isError: true
                    }

                });
            } */
            const resource = new Resource({
                name, description, url, category: [category]
            })
            let rr = await resource.save()
            // console.log(rr)
            // return res.redirect("/d");
            return res.render("pages/dashboard", {
                title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES), serverResponse: {
                    message: `${name} successfully added`,
                    isError: false
                }

            });
        } catch (error) {
            console.log(error.message)
            return res.render("pages/dashboard", {
                title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES), serverResponse: {
                    message: "internal server error",
                    isError: true
                }
            });
        }
    }

    static async likeResource(req: Request, res: Response) {

    }
}

/**
 * get the resource category requested from the router parameter
 * get query the database for the requested resource category
 * send the file to the view engine for rendering
 */

export class ResourceViews {
    static async getResourceCategory(req: Request, res: Response) {
        //get the resource type from the category
        const resourceCategory: string = req.params.category
        /**
         * check if category exists
         * fetch data from the store if it;s exists
         * else render 404 page
         */

        /**
         * define a query builder to fetch resource with the requested category
         * assign the result to a @param content variable
         * ship of the content to view engine
         */
        /*  const query = Resource.find();
         const response = await query.$where(`this.category.includes('${resourceCategory.replaceAll('-', ' ')}')`) */
        const response = await Resource.find({ category: { $in: [resourceCategory.replaceAll('-', ' ').toLowerCase()] } })
        const content = response
        res.render("pages/resource", { title: resourceCategory, layout: "", content, category: resourceCategory.replaceAll("-", " ") });
        // console.log(response);

    }
}



