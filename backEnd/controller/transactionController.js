const { User, CategoryTransaction, CategoryType, Transaction } = require("../models/index");

class transactionController {
  static async addTransaction(req, res, next) {
    try {
      let newData = {
        transactionAmount: req.body.transactionAmount,
        description: req.body.description,
        userId: req.user.id,
        categoryTransactionId: req.body.categoryTransactionId,
        categoryTypeId: req.body.categoryTypeId,
        date: req.body.date,
      };
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
      next(error);
    }
  }
  static async getAllTransactions(req, res, next) {
    try {
      const transactions = await Transaction.findAll({
        include: [CategoryTransaction, CategoryType],
        where: {
          userId: req.user.id,
        },
      });
      if (!transactions) {
        next({
          name: "notFound",
          message: "transactions not Found",
        });
      } else {
        res.status(200).json(transactions);
      }
    } catch (error) {
      next(error);
    }
  }
  static async getById(req, res, next) {
    try {
      let id = req.params.id
      const transaction = await Transaction.findOne({
        include: [CategoryTransaction, CategoryType],
        where: {
          id: id,
        },
      });
      if (!transaction) {
        next({
          name: "notFound",
          message: "transaction not Found",
        });
      } else {
        res.status(200).json(transaction);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteTransaction(req, res, next) {
    try {
      let id = req.params.id;
      const transaction = await Transaction.destroy({
        where: {
          id: id,
        },
      });
      if (!transaction) {
        next({
          name: "notFound",
          message: "transaction not Found",
        });
      } else {
        res.status(200).json({
          message: "succes delete transaction",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async editTransaction(req, res, next) {
    try {
      let id = req.params.id;
      let newData = {
        transactionAmount: req.body.transactionAmount,
        description: req.body.description,
        userId: req.user.id,
        categoryTransactionId: req.body.categoryTransactionId,
        categoryTypeId: req.body.categoryTypeId,
        date: req.body.date,
      };
      const transaction = await Transaction.update(newData, {
        where: {
          id: id,
        },
      });
      if (!transaction) {
        next({
          name: "notFound",
          message: "transaction not Found",
        });
      } else {
        res.status(200).json({
          message: "succes edit transaction",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async incomeTransaction(req, res, next) {
    try {
      const income = await Transaction.sum("transactionAmount", {
        where: {
          userId: req.user.id,
          categoryTransactionId: 1,
        },
      });
      if (!income) {
        next({
          name: "notFound",
          message: "income not Found",
        });
      } else {
        res.status(200).json(income);
      }
    } catch (error) {
      next(error);
    }
  }
  static async expenseTransaction(req, res, next) {
    try {
      const expense = await Transaction.sum("transactionAmount", {
        where: {
          userId: req.user.id,
          categoryTransactionId: 2,
        },
      });
      if (!expense) {
        next({
          name: "notFound",
          message: "expense not Found",
        });
      } else {
        res.status(200).json(expense);
      }
    } catch (error) {
      next(error);
      
    }
  }
  static async totalTransactions(req, res, next) {
    try {
      const income = await Transaction.sum("transactionAmount", {
        where: {
          userId: req.user.id,
          categoryTransactionId: 1,
        },
      });
      const expense = await Transaction.sum("transactionAmount", {
        where: {
          userId: req.user.id,
          categoryTransactionId: 2,
        },
      });
      const total = income - expense;
      if (!total) {
        next({
          name: "notFound",
          message: "total not Found",
        });
      } else {
        res.status(200).json(total);
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = transactionController;
