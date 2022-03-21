const fs = require("fs");
const path = require("path");

function RetroCircle(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class RetroCircle {
		constructor(avatar) {
			if (avatar && typeof avatar != "string") throw new VioleticsError("avatar must be typeof string");
			this.methods = Object.getOwnPropertyNames(RetroCircle.prototype);
			this._args = { avatar: avatar };
		}
		setAvatar(avatar) {
			if (!avatar || typeof avatar != "string")
				throw new VioleticsError("setAvatar() required avatar and must be typeof string");
			this._args.avatar = avatar;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("retro-circle", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
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
	return RetroCircle;
}

module.exports = RetroCircle;
