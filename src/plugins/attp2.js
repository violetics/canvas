function Attp2(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	const Attp2 = function Attp2(text) {
		if (!text) throw new VioleticsError("Attp2() required text and must be typeof string");
		this.methods = Object.getOwnPropertyNames(Attp2.prototype);
		this._args = { text: text };
	};
	Attp2.prototype.send = function (apikey, options) {
		return request(self.BASE("attp2", apikey), options);
	};
	Attp2.prototype.toBuffer = function (cb) {
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
	return (text) => new Attp2(text);
}

module.exports = Attp2;
