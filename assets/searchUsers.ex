query searchUsers($q: String!) {
  searchUsers(query: $q) {
    count
    edges {
      node {
        name
        reviews
      }
    }
  }
}
