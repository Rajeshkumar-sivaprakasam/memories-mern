import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRoutes from "./routes/post.js";

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongodb");

const app = express();
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extends: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: "true" }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://infothamizha:info12345@cluster0.rugrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on Port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
