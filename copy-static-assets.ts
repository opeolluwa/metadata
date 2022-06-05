
import * as shell from "shelljs";
//copy user account UI to dist directory
shell.cp("-R", "./account", "dist/views/pages/");

//copy views directory content to dist directory
shell.cp("-R", "src/public/icons", "dist/public/");
shell.cp("-R", "src/public/stylesheets", "dist/public/");
shell.cp("-R", "src/public/scripts", "dist/public/");
shell.cp("-R", "src/views", "dist/");
//copy email templates  amd uploaded files path to dist directory
shell.cp("-R", "src/templates", "dist/");
shell.cp("-R", "src/uploads", "dist/");







