const fs = require("fs");

let files = fs
    .readdirSync(__dirname)
    .filter((x) => /\.js$/.test(x))
    .map((x) => x.split(".js")[0]);
for (var file of files) {
    if (file == "index") continue;
    let path = `${__dirname}/${file}`;
    let plugins = require(path);
    plugins.path = path;
    exports[file] = plugins;
}
