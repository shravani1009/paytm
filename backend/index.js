const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const v2Router = require ("./routes/user")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1" , mainRouter);

app.use("api/v2", v2Router);

app.listen(3000);