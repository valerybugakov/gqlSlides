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

new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'UNION',
          name: 'SearchResult',
          possibleTypes: [
            { name: 'Human' },
            { name: 'Starship' },
          ],
        },
      ],
    },
  },
})
