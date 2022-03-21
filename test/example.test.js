const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

let welcomer = new canvas.Welcomer().setUsername("Dehanjing").setGroup("Violetics Group").setTs(Date.now());

welcomer
	.toBuffer()
	.then((result) => {
		fs.writeFileSync("./media/result." + result.type.ext, result.buffer);
		console.log("done");
	})
	.catch(console.error);
