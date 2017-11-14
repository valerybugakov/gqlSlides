class ChildComponent extends Component {
  static fragment = gql`
    fragment profileData on User {
      name
    }
  `

  render() { ... }
}

import ChildComponent from './child'

const Root = ({ data }) => ({
  <div>
    {data.isLoading
      ? '...loading'
      : <ChildComponent {...data} />}
  </div>
})

export default graphql(gql`
  query userPage {
    ...profileData
  }
  ${ChildComponent.fragment}
`)(Root)
