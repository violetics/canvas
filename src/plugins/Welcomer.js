const fs = require("fs");
const path = require("path");

function Welcomer(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class Welcomer {
		constructor(args) {
			if (args && (Array.isArray(args) || typeof args != "object"))
				throw new VioleticsError("constructor arguments must be typeof object {}");
			this.methods = Object.getOwnPropertyNames(Welcomer.prototype);
			this._args = args || {};
			this.setTs = this.setTimestamp;
		}
		setUsername(name) {
			if (!name || typeof name != "string")
				throw new VioleticsError("setUsername() required name and must be typeof string");
			this._args.username = name;
			return this;
		}
		setGroup(groupname) {
			if (!groupname) throw new VioleticsError("setGroup() required groupname");
			this._args.groupname = groupname;
			return this;
		}
		setTimestamp(timestamp) {
			if (!timestamp) throw new VioleticsError("setTimestamp() required timestamp");
			if (String(new Date(Number(timestamp))).includes("Invalid Date"))
				throw new VioleticsError("setTimestamp() Invalid Date given");
			this._args.timestamp = timestamp;
			return this;
		}
		setAvatar(avatar) {
			if (!avatar || typeof avatar != "string")
				throw new VioleticsError("setAvatar() required avatar and must be typeof string");
			this._args.avatar = avatar;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("welcomer", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
					username: "Violetics.",
					groupname: "Violetics PUBLIC.",
					timestamp: Date.now(),
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
	return Welcomer;
}

module.exports = Welcomer;
