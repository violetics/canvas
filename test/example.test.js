const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

let q = new canvas.Quotes()
    .setAuthor("Dehan")
    .setText("made with fully automatic");

q.toBuffer()
    .then((result) => {
        fs.writeFileSync("./media/result." + result.type.ext, result.buffer);
        console.log("done");
    })
    .catch(console.error);