const schema = `
  type Query {
    viewer: User
  }

  type User {
    id: ID!
    name: String
  }
`

function getViewer(request) {
  return request.auth.user
}

function getUserName(user) {
  return user.getName()
}
