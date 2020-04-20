require('dotenv').config()
const mongoose = require("mongoose");
CONNECTION_STRING = process.env.MONGO_URI
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);

mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "mylibraryapp" });

const db = mongoose.connection; db.on("error", err => {
    console.error(err);
    process.exit(1); });

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" +
        db.port); });

require("./author");