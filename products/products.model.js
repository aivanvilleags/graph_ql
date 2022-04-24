const products = [
  {
    id: "rs01",
    description: "red shoe",
    price: 24.5,
    reviews: [],
  },
  {
    id: "blj01",
    description: "Blue Jean",
    price: 12.5,
    reviews: [],
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

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);

  return newProduct;
}

function addNewReview(id, rating, comment) {
  const productReviewed = getProductById(id);

  if (productReviewed) {
    const NewReview = {
      rating,
      comment,
    };
    productReviewed.reviews.push(NewReview);
    return NewReview;
  }

  return null;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewReview,
};
