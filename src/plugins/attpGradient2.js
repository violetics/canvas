function AttpGradient2(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const AttpGradient2 = function AttpGradient2(text) {
		if (!text) throw new VioleticsError("AttpGradient2() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(AttpGradient2.prototype);
		this._args = { text: text };
	};
	AttpGradient2.prototype.send = function (apikey, options) {
		return request(self.BASE("attp-gradient2", apikey), options);
	};
	AttpGradient2.prototype.toBuffer = function (cb) {
		let options = parseOptions(
			{
				text: "Violetics.",
			},
			this._args
		);
		if (cb && typeof cb == "function") {
			return this.send(self.apikey, options)
				.then((buffer) => cb(null, buffer))
				.catch((error) => cb(error, null));
		}
		return this.send(self.apikey, options);
	};
	return (text) => new AttpGradient2(text);
}

module.exports = AttpGradient2;
