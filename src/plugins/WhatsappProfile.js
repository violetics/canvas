const fs = require("fs");
const path = require("path");

function WhatsappProfile(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class WhatsappProfile {
		constructor(args) {
			if (args && (Array.isArray(args) || typeof args != "object"))
				throw new VioleticsError("constructor arguments must be typeof object {}");
			this.methods = Object.getOwnPropertyNames(WhatsappProfile.prototype);
			this._args = args || {};
		}
		setUsername(name) {
			if (!name || typeof name != "string")
				throw new VioleticsError("setUsername() required name and must be typeof string");
			this._args.username = name;
			return this;
		}
		setAbout(about) {
			if (!about) throw new VioleticsError("setAbout() required about");
			this._args.about = about;
			return this;
		}
		setNumber(jid) {
			if (!jid) throw new VioleticsError("setNumber() required number and must be typeof number");
			this._args.number = jid;
			return this;
		}
		setAvatar(avatar) {
			if (!avatar || typeof avatar != "string")
				throw new VioleticsError("setAvatar() required avatar and must be typeof string");
			this._args.avatar = avatar;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("whatsapp-profile", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
					username: "Violetics.",
					about: "Violetics keren abiez",
					number: 6281300123450,
					avatar: fs.readFileSync(path.join(__dirname, "../../media/violetics.png")),
				},
				this._args
			);
			if (cb && typeof cb == "function") {
				return this.send(self.apikey, options)
					.then((buffer) => cb(null, buffer))
					.catch((error) => cb(error, null));
			}
			return this.send(self.apikey, options);
		}
	}
	return WhatsappProfile;
}

module.exports = WhatsappProfile;
