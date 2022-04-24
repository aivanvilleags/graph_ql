const { getAllOrders } = require("./orders.model");

module.exports = {
  Query: {
    orders: async (parent, args, context, info) => {
      return await getAllOrders();
    },
  },
};
