union SearchResult = Human | Starship

type Search {
  resultCount: Int!
  results: [SearchResult]!
}

{
  search(query: "an") {
    ... on Human {
      name
      height
    }
    ... on Starship {
      name
      length
    }
  }
}

new IntrospectionFragmentMatcher(
  introspectionQueryResult
)

const client = new ApolloClient({
  fragmentMatcher: matcher,
  // ...
})
