const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
} = require("./products.model");

module.exports = {
  Query: {
    products: (_) => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return getProductById(args.id);
    },
  },
};