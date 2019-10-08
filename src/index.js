const inquirer = require("inquirer");
var path = require("path");
var ncp = require("ncp").ncp;

const starterFiles = {
  typescript: "typescript",
  javascript: "javascript"
};

(async () => {
  const { lang } = await inquirer.prompt([
    {
      type: "list",
      message: "Pick the language you're using:",
      name: "lang",
      choices: ["javascript", "typescript"]
    }
  ]);

  const cwd = process.cwd();
  ncp(path.resolve(__dirname, "..") + `/${starterFiles[lang]}`, cwd, function(
    err
  ) {
    if (err) {
      return console.error(err);
    }
    console.log("successfully created");
    console.log("installing node_modules...........");

    const { spawnSync } = require("child_process"),
      ls = spawnSync("npm", ["install"]);

    console.log(`stderr: ${ls.stderr.toString()}`);
    console.log(`stdout: ${ls.stdout.toString()}`);
  });
})();
