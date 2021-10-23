const mongoose = require("mongoose");

//const url = "mongodb://localhost:27017/product_data";
const url = "mongodb+srv://user1:<password>@cluster0.oyewr.mongodb.net/eCommerce?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = function () {
    mongoose.connect(url, options);
    const db = mongoose.connection;
    mongoose.Promise = global.Promise;

    db.on("error", function (err) {
        console.log("error");
    });

    db.once("open", function () {
        console.log("connected");
        //console.log(db);
    });

    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            console.log(
                "Mongoose default connection is disconnected due to application termination"
            );
            process.exit(0);
        });
    });
};

//module.exports = {mongoose};
