function TtpGradient(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const TtpGradient = function TtpGradient(text) {
		if (!text) throw new VioleticsError("TtpGradient() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(TtpGradient.prototype);
		this._args = { text: text };
	};
	TtpGradient.prototype.send = function (apikey, options) {
		return request(self.BASE("ttp-gradient", apikey), options);
	};
	TtpGradient.prototype.toBuffer = function (cb) {
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
	return (text) => new TtpGradient(text);
}

module.exports = TtpGradient;
