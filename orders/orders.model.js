const orders = [
  {
    date: "2005-05-05",
    subtotal: 125.23,
    items: [
      {
        product: {
          id: "rs01",
          description: "Old Red Shoe",
          price: 45.5,
        },
        quantity: 10,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
