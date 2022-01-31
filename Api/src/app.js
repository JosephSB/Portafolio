const express = require("express");
const path = require("path");
const cors = require("cors");
const MainRouter = require("./router/MainRouter");

const app = express();
const DirectorioPublico = express.static(path.join(__dirname + "/public"));
app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(DirectorioPublico);

app.use("/", MainRouter);

module.exports = app;
