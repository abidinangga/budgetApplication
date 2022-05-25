const Controller = require("../controller/categoryController");
const express = require("express");
const router = express.Router();


router.get('/', Controller.getCategory);


module.exports = router;