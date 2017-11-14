# Authentication context
query {
  viewer {
    myFilms {
      ...
    }
  }
}

# Field path context
query {
  teacher {
    students
  }
}

query {
  lesson {
    students
  }
}
