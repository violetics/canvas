const fs = require("fs");
const path = require("path");

function AttpGradient(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const AttpGradient = function AttpGradient(text) {
		if (!text) throw new VioleticsError("AttpGradient() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(AttpGradient.prototype);
		this._args = { text: text };
	};
	AttpGradient.prototype.toBuffer = function (cb) {
		let options = parseOptions(
			{
				text: "Violetics.",
			},
			this._args
		);
		let send = (apikey, options) => request(self.BASE("attp-gradient", apikey), options);
		if (cb && typeof cb == "function") {
			return send(self.apikey, options)
				.then((buffer) => cb(null, buffer))
				.catch((error) => cb(error, null));
		}
		return send(self.apikey, options);
	};
	return (text) => new AttpGradient(text);
}

module.exports = AttpGradient;