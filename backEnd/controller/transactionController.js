const { User, CategoryTransaction, CategoryType, Transaction } = require("../models/index");

class transactionController {
  static async addTransaction(req, res, next) {
    let newData = {
      transactionAmount: req.body.transactionAmount,
      description: req.body.description,
      userId: req.user.id,
      categoryTransactionId: req.body.categoryTransactionId,
      categoryTypeId: req.body.categoryTypeId,
      date: req.body.date,
    };
    console.log(newData);
    try {
      const transaction = await Transaction.create(newData);
      res.status(201).json({
        statusCode: 201,
        data: {
          transactionAmount: transaction.transactionAmount,
          description: transaction.description,
          userId: transaction.userId,
          categoryTransactionId: transaction.categoryTransactionId,
          categoryTypeId: transaction.categoryTypeId,
          date: transaction.date,
        },
      });
    } catch (error) {
      console.log("error: ", error);
      next(error);
    }
  }
  static async getAllTransactions(req, res, next) {}
  static async deleteTransaction(req, res, next) {}
  static async totalTransactions(req, res, next) {}
}
module.exports = transactionController;
