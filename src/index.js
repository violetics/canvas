const fs = require("fs");
const utils = require("./utils");
const { VioleticsError } = utils;

class Violetics {
    constructor(apikey) {
        if (!apikey || typeof apikey != "string")
            throw new VioleticsError(
                "arguments 'apikey' must be typeof string and required!"
            );
        this.utils = utils;
        this.plugins = require("./plugins");
        this.apikey = apikey;
        for (var plugins in this.plugins) {
            this[plugins] = this.plugins[plugins](this);
        }
    }
    BASE(path, apikey) {
        return `https://violetics.pw/api/canvas/${path}?apikey=${apikey}`;
    }
}

module.exports = Violetics;
