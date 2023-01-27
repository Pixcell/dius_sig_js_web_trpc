import { gql } from '@apollo/client';

export const GET_LIST = gql`
  query GetList {
    list {
      id
      title
      description
    }
  }
`