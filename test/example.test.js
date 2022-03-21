const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

const VSNeon = new canvas.VSNeon().setPlayer2(fs.readFileSync("./media/violetics.png"));

VSNeon.toBuffer((err, result) => {
	if (err) return console.error(err);
	let path = `./media/result.${result.type.ext}`;
	fs.writeFileSync(path, result.buffer);
	console.log("done");
});
