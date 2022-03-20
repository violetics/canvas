const isUrl = require("./isUrl");
let axios = require("axios");
let FormData = require("form-data");

module.exports = function sendRequest(url, options) {
    let bodyForm = new FormData();
    Object.entries(options).map(([name, value]) => {
        let media = ["player1", "player2", "avatar"];
        if (!Buffer.isBuffer(value) && !isUrl(value)) {
            bodyForm.append(name, value);
        } else if (isUrl(value) && media.includes(name)) {
            bodyForm.append(name, value);
        } else if (Buffer.isBuffer(value) && media.includes(name)) {
            bodyForm.append(name, Buffer.from(value, "binary"), {
                filename: `${name}-module.png`,
            });
        }
    });
    let hasMedia = bodyForm._streams.filter((x) => /content-type.+/gi.test(x))[0];
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            ...(hasMedia ? { data: bodyForm.getBuffer(), method: "POST", } : { params: options, method: "GET" }),
            responseType: "arraybuffer",
            headers: {
                ...bodyForm.getHeaders(),
            }
        }).then((response) => resolve(response.data)).catch(reject);
    });
};