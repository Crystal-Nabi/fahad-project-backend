// const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url =
  "mongodb+srv://usamatoheed:Platfor1@3@cluster0.kw5dyri.mongodb.net/?retryWrites=true&w=majority";
db.catagories = require("./catagoryModel.js")(mongoose);

module.exports = db;
