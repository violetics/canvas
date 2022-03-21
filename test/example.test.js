const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

const AnimeCard = new canvas.AnimeCard()
    .setAvatar("https://violetics.pw/assets/avatars/face-6.jpg");

AnimeCard.toBuffer((err, result) => {
	if (err) return console.log(err);
	fs.writeFileSync(`./media/result.${result.type.ext}`, result.buffer);
	console.log("done");
});
