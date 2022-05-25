const Controller = require("../controller/transactionController");
const express = require("express");
const router = express.Router();

router.post("/", Controller.addTransaction);
router.get("/", Controller.getAllTransactions);
router.delete('/:id', Controller.deleteTransaction);
router.get('/:id', Controller.totalTransactions);

module.exports = router;