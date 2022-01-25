// Ensure the installation dependencies are imported into the main index.js/server.js file
const { ApolloServer, gql } = require("apollo-server");

// Optional: for testing purposes, an array can be used as mock data for your schema setup.
const itemsFromDB = [
  {
    id: 1,
    item: "T Shirt",
    colour: "Blue",
    size: "Large",
    quantity: 100,
  },
  {
    id: 2,
    item: "Hoodie",
    colour: "Red",
    size: "Medium",
    quantity: 150,
  },
  {
    id: 3,
    item: "Checked Shirt",
    colour: "Grey",
    size: "Small",
    quantity: 200,
  },
  {
    id: 4,
    item: "Sports Polo",
    colour: "Yellow",
    size: "Extra Small",
    quantity: 250,
  },
];

const categoryFromDB = [
  {
    id: 1,
    category: "Menswear",
  },
  {
    id: 2,
    category: "Womenswear",
  },
];

// Step 1: Define schema or type definitions
const typeDefs = gql`
  type Item {
    id: Int
    item: String
    colour: String
    size: String
    quantity: Int
  }

  type Category {
    id: Int
    category: String
  }

  type Query {
    # all your queries here
    item: [Item]
    category: [Category]
  }
`;

// Step 2: Define your resolvers
const itemResolver = () => {
  // return value should respect schema
  return itemsFromDB;
};

const categoryResolver = () => {
  // return value should respect schema
  return categoryFromDB;
};

const resolvers = {
  Query: {
    item: itemResolver,
    category: categoryResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
