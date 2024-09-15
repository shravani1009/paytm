const express = require("express");
const mainRouter = require("./router/index");

const app = express();

app.use("/api/v1" , mainRouter);

app.use("api/v2", v2Router);