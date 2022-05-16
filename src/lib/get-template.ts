//get email template
import path from "path"
export const getTemplate = (template: string) => path.join(__dirname, "templates", `${template}.ejs`)
