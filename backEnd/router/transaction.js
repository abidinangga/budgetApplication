const Controller = require("../controller/transactionController");
const express = require("express");
const router = express.Router();

router.post("/", Controller.addTransaction);
router.get("/", Controller.getAllTransaction);
router.delete('/:id', Controller.deleteTransaction);

module.exports = router;