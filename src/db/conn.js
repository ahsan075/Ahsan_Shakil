const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/cvPortfolio";

mongoose.connect(
    url,
    {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    (err, res) => {
        if (err) {
            console.log("database not connected");
        } else {
            console.log("database connected");
        }
    }
);
