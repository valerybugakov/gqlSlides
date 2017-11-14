query search($query: String!) {
  search(query: $query) {
    count
    edges {
      node {
        ... on Film {
          title
          releaseDate
        }
      }
    }
  }
}
