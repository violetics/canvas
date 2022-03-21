function Ttp(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const Ttp = function Ttp(text) {
		if (!text) throw new VioleticsError("ttp() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(Ttp.prototype);
		this._args = { text: text };
	};
	Ttp.prototype.send = function (apikey, options) {
		return request(self.BASE("ttp", apikey), options);
	};
	Ttp.prototype.toBuffer = function (cb) {
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
	return (text) => new Ttp(text);
}

module.exports = Ttp;
