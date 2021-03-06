"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const routers = require("./router/index");
const port = 3000;
const { errorHandler } = require("./middleware/errorHandler");
const cors =require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);
app.use(errorHandler);

app.listen(port, function(){
  console.log("server listening on port %d",port);
});

module.exports = app;
