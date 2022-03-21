const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

const VSSynthretro = new canvas.VSSynthretro().setPlayer2(fs.readFileSync("./media/violetics.png"));

VSSynthretro.toBuffer((err, result) => {
	if (err) return console.error(err);
	let path = `./media/result.${result.type.ext}`;
	fs.writeFileSync(path, result.buffer);
	console.log("done");
});
