const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const port = process.env.PORT || 4000;
require("./db/conn");

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

app.listen(port, () => [console.log(`Server Running on ${port} PORT`)]);
