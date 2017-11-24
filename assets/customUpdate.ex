const options = {
  update: (cache, { data: { todo } }) => {
    const data = cache.readQuery({ todoQuery })

    data.todos.push(todo)

    cache.writeQuery({ todoQuery, data })
  },
}
