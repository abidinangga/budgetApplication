const express = require("express");
const { authentication } = require("../middleware/auth");
const router = express.Router();
const user = require("./user");
const transaction = require("./transaction");
const category = require("./category");

router.use("/", user);
router.use("/category", category);
router.use(authentication);
router.use("/transaction", transaction);

module.exports = router;