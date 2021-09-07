const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const port = process.env.PORT || 4000;
require("./db/conn");

const Messages = require("./db/message");

const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", viewPath);

hbs.registerPartials(partialPath);

app.get("/", (req, res, next) => {
    res.render("home");
});

app.post("/message", async (req, res) => {
    const { name, email, message } = req.body;

    const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name || !email || !message) {
        return res.json({
            status: "errorall",
            error: "Please fill in all fields",
        });
    }

    if (
        typeof name !== "string" ||
        isNaN(name) === false ||
        isNaN(name[0]) === false ||
        format.test(name) === true
    ) {
        return res.json({
            status: "errorname",
            error: "Invalid username",
        });
    }

    if (validRegex.test(email) === false) {
        return res.json({
            status: "erroremail",
            error: "Invalid email format",
        });
    }

    try {
        const messageSend = await new Messages({
            name,
            email,
            message,
        });

        const datas = await messageSend.save();

        if (datas) {
            return res.json({
                status: "ok",
                msg: "Comment done successfully !",
            });
        } else {
            return res.json({
                status: "errornotsend",
                error: "some wrong on the server side",
            });
        }
    } catch (e) {
        return res.json({
            status: "errorcatch",
            error: "some wrong on the server side",
        });
    }
});

app.post("/reply", async (req, res) => {
    const { name, email, message } = req.body;

    const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name || !email || !message) {
        return res.json({
            status: "errorall",
            error: "Please fill in all fields",
        });
    }

    if (
        typeof name !== "string" ||
        isNaN(name) === false ||
        isNaN(name[0]) === false ||
        format.test(name) === true
    ) {
        return res.json({
            status: "errorname",
            error: "Invalid username",
        });
    }

    if (validRegex.test(email) === false) {
        return res.json({
            status: "erroremail",
            error: "Invalid email format",
        });
    }

    try {
        const messageSend = await new Messages({
            name,
            email,
            message,
        });

        const datas = await messageSend.save();

        if (datas) {
            return res.json({
                status: "ok",
                msg: "Comment done successfully !",
            });
        } else {
            return res.json({
                status: "errornotsend",
                error: "some wrong on the server side",
            });
        }
    } catch (e) {
        return res.json({
            status: "errorcatch",
            error: "some wrong on the server side",
        });
    }
});

app.get("/api", (req, res) => {
    Messages.find({}, function (err, posts) {
        if (err) {
            console.log(err);
        } else {
            return res.json({
                data: posts,
            });
        }
    });
});

app.post("/delete", (req, res) => {
    Messages.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            console.log("Data Deleted!");
        }
    });
});

app.listen(port, () => [console.log(`Server Running on ${port} PORT`)]);
