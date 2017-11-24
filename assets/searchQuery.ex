query search($q: String!) {
  search(query: $q) {
    count
    edges {
      node {
        ... on User {
          name
          reviews
        }
        ... on Film {
          title
          releaseDate
        }
      }
    }
  }
}
