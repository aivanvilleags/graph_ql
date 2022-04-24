const products = [
  {
    id: "rs01",
    description: "red shoe",
    price: 24.5,
  },
  {
    id: "blj01",
    description: "Blue Jean",
    price: 12.5,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price > min && product.price < max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id == id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
