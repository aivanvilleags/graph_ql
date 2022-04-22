const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review{
        rating: Int!
        comment: String
    }

    type Order{
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem{
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
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
  ],
  orders: [
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
  ],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server");
});
