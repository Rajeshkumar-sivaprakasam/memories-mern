const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongodb");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extends: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: "true" }));
app.use(cors());
