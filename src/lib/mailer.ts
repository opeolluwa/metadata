import { getTemplate } from "./get-template";

//imports
const nodemailer = require("nodemailer");
const path = require("path");
const ejs = require("ejs");

interface Options {
    email: string;
    subject: string;
    template: string;

}

export async function mailer(options: Options) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            // port: 465,
            // secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
        const message = {
            from: `Opeoluwa from Meta Data <${String(process.env.SMTP_USER)}>`,
            replyTo: process.env.SMTP_USER,
            to: options.email,
            subject: options.subject,
            html: options.template,
            // html: ejs.renderFile(path.join(__dirname, `${options.template}.ejs`), {}),
        }; let info = await transporter.sendMail(message);
        console.log(info)
    } catch (error) {
        console.log(error);
    }
}



// ejs.renderFile("../templates/welcome.ejs", { firstname: "Morenikeji", link: "https://github.com/opeolluwa" },  function (err: any, template: any) {
//     // str => Rendered HTML string
//     mailer({ email: "adefemiadeoye@yahoo.com", subject: "welcome to meta data", template })
// });