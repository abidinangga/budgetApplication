const {CategoryType,CategoryTransaction} =require('../models/index');

class categoryController{

  static async getCategory(req, res, next){
    try{
      const category = await CategoryType.findAll({
        include: [CategoryTransaction],
      });
      if(!category){
        next({
          name: "notFound",
          message: "category not Found",
        });
      } else {
        res.status(200).json(category);
      }
    } catch(error){
      next(error);
    }
  }
}

module.exports = categoryController;