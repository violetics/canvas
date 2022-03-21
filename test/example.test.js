const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

let attp = canvas.attp("shhss").toBuffer((error, result) => {
	console.log();
	if (error) return console.error(error);
	let { type, buffer } = result;
	let path = `./media/result.${type.ext}`;
	fs.writeFileSync(path, buffer);
	let writeBuffer = fs.readFileSync(path);
	console.log(writeBuffer);
});
