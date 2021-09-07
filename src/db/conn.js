const mongoose = require("mongoose");
const url =
    "mongodb+srv://ahsan:Ahsan075@ahsanshakil.yl1tg.mongodb.net/message";

// const url = "mongodb://localhost:27017/Message";

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
