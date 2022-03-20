const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const utils = require("./utils");
const { VioleticsError } = utils;

class Violetics {
    constructor(apikey) {
        if (!apikey || typeof apikey != "string") throw new VioleticsError("arguments 'apikey' must be typeof string and required!");
        this.utils = utils;
        this.plugins = require("./plugins");
        this.apikey = apikey;
        for (var plugins in this.plugins) {
            this[plugins] = this.plugins[plugins](axios, FormData, this);
        }
    }
    BASE(path, apikey) {
        return `http://localhost:3001/api/canvas/${path}?apikey=${apikey}`;
    }
}

module.exports = Violetics;