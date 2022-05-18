//copy views directory content to dist directory

import * as shell from "shelljs";

shell.cp("-R", "src/public/icons", "dist/public/");
shell.cp("-R", "src/public/stylesheets", "dist/public/");
shell.cp("-R", "src/public/scripts", "dist/public/");
shell.cp("-R", "src/views", "dist/");
shell.cp("-R", "src/templates", "dist/");





