const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

canvas.attp2("shhss").toBuffer((error, result) => {
	if (error) return console.error(error);
	let { type, buffer } = result;
	let path = `./media/result.${type.ext}`;
	fs.writeFileSync(path, buffer);
	let writeBuffer = fs.readFileSync(path);
	console.log(writeBuffer);
});
