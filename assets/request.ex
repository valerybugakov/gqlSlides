const { start, success, error } = createActions([
  'FETCH_POSTS_START',
  'FETCH_POSTS_SUCCESS',
  'FETCH_POSTS_ERROR',
])

const reducer = createReducer({
  [start]: handleStart,
  [success]: handleSuccess,
  [error]: handleError,
}, {})

return async (dispatch, getState) => {
  dispatch(start())

  try {
    const data = await client.query(params)
    dispatch(success(data))
  }
  catch (error) {
    dispatch(error(error))
  }
}

export default connect(
  selector({
    isLoading,
    error,
    data,
  },
  actions
)(ComponentWithData)

class ComponentWithData exteds Component {
  componentDidMount() {
    this.props.fetchData()
  }

  componentWillUnmout() {
    this.props.abortCurrentFetch()
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />
    }

    if (this.props.error) {
      return <Error />
    }

    return <div>{this.props.data}</div>
  }
}






