const fs = require("fs");
const path = require("path");

function attp(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const Attp = function Attp(text) {
		if (!text) throw new VioleticsError("attp() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(Attp.prototype);
		this._args = { text: text };
	};
	Attp.prototype.toBuffer = function (cb) {
		let options = parseOptions(
			{
				text: "Violetics.",
			},
			this._args
		);
		let send = (apikey, options) => request(self.BASE("attp", apikey), options);
		if (cb && typeof cb == "function") {
			send(self.apikey, options)
				.then((buffer) => cb(null, buffer))
				.catch((error) => cb(error, null));
		}
		return send(self.apikey, options);
	};
	return (text) => new Attp(text);
}

module.exports = attp;
