export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    date: String
  }

  type DeliveryAddress {
      street_name: String
      street_number: String
      city: String
      postal_code: String
  }

  type Delivery {
      first_name: String
      last_name: String
      address: DeliveryAddress
  }

  type Material {
      material: String
      amount: Int
      currency: String
      price: Float
      delivery: Delivery
      timestamp: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        materials: [Material]
    }
`;
