const mongoose = require("mongoose");
const dbName = "mediana";

const url = `mongodb://127.0.0.1:27017/${dbName}`;

const connectDb = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected...")
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDb;
