const fs = require("fs");

function WhatsappProfile(self) {
    let { VioleticsError, request, parseOptions } = self.utils;
    class WhatsappProfile {
        constructor(args) {
            if (args && (Array.isArray(args) || typeof args != "object")) throw new VioleticsError("constructor arguments must be typeof object {}");
            this.methods = Object.getOwnPropertyNames(WhatsappProfile.prototype);
            this._args = args || {};
        }
        setUsername(name) {
            if (!name || typeof name != "string") throw new VioleticsError("setUsername() required name and must be typeof string");
            this._args.username = name;
            return this;
        }
        setAbout(about) {
            if (!about || typeof about != "string") throw new VioleticsError("setAbout() required about and must be typeof string");
            this._args.about = about;
            return this;
        }
        setNumber(jid) {
            jid = Number(jid);
            if (!jid) throw new VioleticsError("setNumber() required number and must be typeof number");
            this._args.number = jid;
            return this;
        }
        send(apikey, options) {
            return request(self.BASE("whatsapp-profile", apikey), options);
        }
        toBuffer() {
            let options = parseOptions({
                username: "Violetics.",
                about: "Violetics keren abiez",
                number: 6281300123450,
                avatar: fs.readFileSync(`${__dirname.split("/").slice(0, -2).join("/")}/media/violetics.png`),
            }, this._args);
            return this.send(self.apikey, options);
        }
    }
    return WhatsappProfile;
}

module.exports = WhatsappProfile;