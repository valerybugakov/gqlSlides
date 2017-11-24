const { start, success, error } = createActions([
  'CREATE_PERSON_START',
  'CREATE_PERSON_SUCCESS',
  'CREATE_PERSON_ERROR',
])

const reducer = createReducer({
  [start]: handleStart,
  [success]: handleSuccess,
  [error]: handleError,
}, {})

return async (dispatch, getState) => {
  dispatch(start())

  try {
    const data = await fetch('/createPerson')
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
    this.props.createPerson()
  }

  componentWillUnmout() {
    this.props.abortRequest()
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






