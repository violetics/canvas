const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const BlueBird = require("bluebird");
const utils = require("./utils");
const { VioleticsError } = utils;

class Violetics {
    constructor(apikey) {
        if (!apikey || typeof apikey != "string") throw new VioleticsError("arguments 'apikey' must be typeof string and required!");
        this.utils = utils;
        this.apikey = apikey;
    }
    BASE(path, apikey) {
        return `https://violetics.pw/api/canvas/${path}?apikey=${apikey}`;
    }
}

module.exports = Violetics;