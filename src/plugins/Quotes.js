function Quotes(self) {
	let { VioleticsError, request, parseOptions } = self.utils;
	class Quotes {
		constructor(args) {
			if (args && (Array.isArray(args) || typeof args != "object"))
				throw new VioleticsError("constructor arguments must be typeof object {}");
			this.methods = Object.getOwnPropertyNames(Quotes.prototype);
			this._args = args || {};
		}
		setAuthor(author) {
			if (!author) throw new VioleticsError("setAuthor() required author");
			this._args.author = author;
			return this;
		}
		setText(text) {
			if (!text) throw new VioleticsError("setText() required text");
			this._args.text = text;
			return this;
		}
		send(apikey, options) {
			return request(self.BASE("quotes", apikey), options);
		}
		toBuffer(cb) {
			let options = parseOptions(
				{
					author: "Violetics.",
					text: "Violetics keren abiez",
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
	return Quotes;
}

module.exports = Quotes;
