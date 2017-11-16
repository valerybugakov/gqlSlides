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
  university {
    lesson {
      students
    }
  }
}

query {
  day {
    lesson {
      students
    }
  }
}
