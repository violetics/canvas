const fs = require("fs");
const path = require("path");

function VSNeon(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class VSNeon {
		constructor(args) {
			if (args && (Array.isArray(args) || typeof args != "object"))
				throw new VioleticsError("constructor arguments must be typeof object {}");
			this.methods = Object.getOwnPropertyNames(VSNeon.prototype);
			this._args = args || {};
		}
		setPlayer1(player1) {
			if (!player1 || typeof player1 == "number")
				throw new VioleticsError("setPlayer1() required player1 <buffer|url>");
			this._args.player1 = player1;
			return this;
		}
		setPlayer2(player2) {
			if (!player2 || typeof player2 == "number")
				throw new VioleticsError("setPlayer2() required player2 <buffer|url>");
			this._args.player2 = player2;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("vs-neon", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
					player1: fs.readFileSync(path.join(__dirname, "../../media/violetics.png")),
					player2: "https://violetics.pw/assets/avatars/user.png",
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
	return VSNeon;
}

module.exports = VSNeon;
