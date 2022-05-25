const Controller = require("../controller/transactionController");
const express = require("express");
const router = express.Router();

router.post("/", Controller.addTransaction);
router.get("/", Controller.getAllTransactions);
router.get("/income", Controller.incomeTransaction);
router.get("/expense", Controller.expenseTransaction);
router.get('/total', Controller.totalTransactions);
router.put('/:id', Controller.editTransaction);
router.delete('/:id', Controller.deleteTransaction);

module.exports = router;