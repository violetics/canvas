const fs = require("fs");
const path = require("path");

function AnimeCard(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class AnimeCard {
		constructor(args) {
			if (args && (Array.isArray(args) || typeof args != "object"))
				throw new VioleticsError("constructor arguments must be typeof object {}");
			this.methods = Object.getOwnPropertyNames(AnimeCard.prototype);
			this._args = args || {};
		}
		setText(text) {
			if (!text) throw new VioleticsError("setText() required text");
			this._args.text = text;
			return this;
		}
		setAvatar(avatar) {
			if (!avatar || typeof avatar != "string")
				throw new VioleticsError("setAvatar() required avatar and must be typeof string");
			this._args.avatar = avatar;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("anime-card", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
					text: "Made with <3 by Violetics",
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
	return AnimeCard;
}

module.exports = AnimeCard;
