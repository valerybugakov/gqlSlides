import { ApolloProvider } from 'react-apollo'
import client from './client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <MyAppComponent />
  </ApolloProvider>,
  document.getElementById('root')
)

export default graphql(todosQuery, {
  options: {
    variables: {
      status: DONE
    }
  },
})(TodoApp);

class TodoApp extends Component {
  render() {
    if (this.props.data.isLoading) {
      return <Loader />
    }

    if (this.props.data.error) {
      return <Error />
    }

    return <div>{this.props.data.result}</div>
  }
}


