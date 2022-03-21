const fs = require("fs");
const path = require("path");

function Attp2(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const Attp2 = function Attp2(text) {
		if (!text) throw new VioleticsError("Attp2() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(Attp2.prototype);
		this._args = { text: text };
	};
	Attp2.prototype.toBuffer = function (cb) {
		let options = parseOptions(
			{
				text: "Violetics.",
			},
			this._args
		);
		let send = (apikey, options) => request(self.BASE("Attp2", apikey), options);
		if (cb && typeof cb == "function") {
			return send(self.apikey, options)
				.then((buffer) => cb(null, buffer))
				.catch((error) => cb(error, null));
		}
		return send(self.apikey, options);
	};
	return (text) => new Attp2(text);
}

module.exports = Attp2;
