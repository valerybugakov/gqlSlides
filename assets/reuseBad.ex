import { one, two, three } from 'fragments'

export const query = gql`
  query allMyData {
    maybeSomeField
    ...one
    ...two
    ...three
  }
`
