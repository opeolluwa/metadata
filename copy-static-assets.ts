
import * as shell from "shelljs";

//copy views directory content to dist directory
shell.cp("-R", "src/public/*", "dist/public/");
shell.cp("-R", "src/views", "dist/");
//copy email templates  amd uploaded files path to dist directory
shell.cp("-R", "src/templates", "dist/");
shell.cp("-R", "src/uploads", "dist/");







