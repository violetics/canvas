function attp(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const Attp = function Attp(text) {
		if (!text) throw new VioleticsError("attp() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(Attp.prototype);
		this._args = { text: text };
	};
	Attp.prototype.send = function (apikey, options) {
		return request(self.BASE("attp", apikey), options);
	};
	Attp.prototype.toBuffer = function (cb) {
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
	return (text) => new Attp(text);
}

module.exports = attp;
