 mutation createReview($review: String!) {
  createReview(review: $review) {
    id
    stars
    commentary
    root {
      changed
    }
  }
}
