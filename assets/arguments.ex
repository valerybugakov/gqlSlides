query movies($rating: Int) {
  recentlyWatched {
    count
    films(rating: $rating) {
      edges {
        node {
          title
          releaseDate
        }
      }
    }
  }
}
