const schema = `
  type Query {
    viewer: User
  }

  type User {
    id: ID!
    name: String
    address: Location
  }

  type Location {
    id: ID!
    city: String
    street: String
  }
`

// Resolvers
const root = {
  viewer: request => request.auth.user,
}

const user = {
  name: user => user.getName(),
  address: user => user.getAddress(),
}
