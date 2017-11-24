const { result, complete } = cache.diff({
  query: document
  variables,
  returnPartialData: true,
})

const stopHere = (
  complete ||
  fetchPolicy === 'cache-only'
)



