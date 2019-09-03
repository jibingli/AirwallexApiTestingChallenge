
const config=require("config");


// parse config for diff env
let hostname=config.get("host");

module.exports.hostname=hostname;