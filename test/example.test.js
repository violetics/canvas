const Violetics = require("../src");
const canvas = new Violetics("beta");
const fs = require("fs");

let wa = new canvas.WhatsappProfile()
    .setUsername("Mr. Violetics")
    .setAbout("Violetics is da best")
    .setNumber("62895333381439");
    
wa.toBuffer()
    .then(async (buffer) => {
        let path = `${__dirname.split("/").slice(0, -1).join("/")}/media/result.png`;
        fs.writeFileSync(path, buffer);
        let writeBuffer = fs.readFileSync(path);
        console.log(writeBuffer);
    })
    .catch((error) => console.error(error));