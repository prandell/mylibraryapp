// Some static data, an array of objects representing each author
const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    first_name: String,
    last_name: String
});
const Author = mongoose.model("author", authorSchema, "author");
module.exports = Author;
