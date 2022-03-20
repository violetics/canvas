const fs = require("fs");
const Violetics = require("../src");
const canvas = new Violetics("beta");

let wa = new canvas.WhatsappProfile()
    .setUsername("Mr. Violetics")
    .setAbout("Violetics is da best")
    .setNumber("62895333381439")
    .setAvatar("https://violetics.pw/assets/images/logo.png");

wa.toBuffer()
    .then((buffer) => {
        let path = `${__dirname.split("/").slice(0, -1).join("/")}/media/result.png`;
        fs.writeFileSync(path, buffer);
        let writeBuffer = fs.readFileSync(path);
        console.log(writeBuffer);
    })
    .catch((error) => console.error(error));
