const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.Promise = global.Promise;
const db = {};
console.log(process.env.DB_URL);
db.mongoose = mongoose;
db.url = process.env.DB_URL;
db.catagories = require("./catagoryModel.js")(mongoose);

module.exports = db;
