const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

let Retro = new canvas.RetroWolves()
    .setAvatar("https://violetics.pw/assets/avatars/user.png");
    
Retro.toBuffer()
	.then((result) => {
		fs.writeFileSync("./media/result." + result.type.ext, result.buffer);
		console.log("done");
	})
	.catch(console.error);
