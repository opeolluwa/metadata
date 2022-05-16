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
                user: 'drizzle.system.software@gmail.com',
                pass: 'bzcpxbktaxrlhngc',
            },
        });
        const message = {
            from: `Opeoluwa from Meta Data <drizzle.system.software@gmail.com>`,
            replyTo: 'hello@stitchvine.com',
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


// ejs.renderFile(getTemplate("welcome"), { firstname: "Morenikeji", link:"https://github.com/opeolluwa" }, function (_err: any, template: string) {
//     // str => Rendered HTML string
//     mailer({ email: "adefemiadeoye@yahoo.com", subject: "welcome to meta data", template })
// });

ejs.renderFile("../templates/welcome.ejs", { firstname: "Morenikeji", link: "https://github.com/opeolluwa" },  function (err: any, template: any) {
    // str => Rendered HTML string
    mailer({ email: "adefemiadeoye@yahoo.com", subject: "welcome to meta data", template })
});