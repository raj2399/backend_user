const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
const mongoose = require("mongoose");
const userController = require("./controller/user");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase", {
    useNewUrlParser: true,
});
mongoose.connection.on("open", () => {
    console.log("<<<Database connected>>>");
});
mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
);

const port=  process.env.PORT;
app.post("/addUser", userController.addUser);
app.get("/getUser", userController.getAllUser);
app.get("/", (req, res) => {
    res.status(200).send("Hello World !");
});

app.listen(port);

