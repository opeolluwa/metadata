import { NextFunction, Request, Response } from "express"
import { RESOURCE_CATEGORIES } from "../../models/Resource";
const isValidURL = require("url-validator")

export default class Resource {
    static async addResource(req: Request, res: Response) {
        /**
         * get the resource details from the frontend,
         * parse, validate and store it
         */
        const { name, description, url, category } = req.body
        const { username, user_id } = req.session.user;

        //validate the request
        const error = {
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
            return res.status(400).send({
                success: false,
                message: "bad request",
                error
            })
            /*  return res.render("pages/dashboard", { title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES) }); */
        }

        try {
            /*  // see if name already exist 
             // const resourceExists = await Resource.find({ name })
             if (true) {
                 return res.render("pages/dashboard", {
                     title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES), serverResponse: {
                         message: `${name} already exists`,
                         isError: true
                     }
 
                 });
             } */

            // console.log(rr)
            /* // return res.redirect("/d");
            return res.render("pages/dashboard", {
                title: "Error adding Resource ", layout: "", error: {}, value: {}, username, categories: Object.values(RESOURCE_CATEGORIES), serverResponse: {
                    message: `${name} successfully added`,
                    isError: false
                }

            }); */
            return res.send({
                success: true,
                message: "successfully added resource",
                data: {
                    name, description, url, category
                }
            })
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

}