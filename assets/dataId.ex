const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      // Custom ids
      case 'bar': return object.blah
      case 'foo': return object.foo + object.bar

      // Default fallback
      default: return object.id || object._id
    }
  }
})
