const express = require("express");
const cors = require("cors");
const MainRouter = require("./router/MainRouter");

const app = express();
app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", MainRouter);

module.exports = app;
