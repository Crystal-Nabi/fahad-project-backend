// const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = process.env.db_URL;
db.catagories = require("./catagoryModel.js")(mongoose);

module.exports = db;
