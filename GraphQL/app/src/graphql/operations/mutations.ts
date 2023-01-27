import { gql } from '@apollo/client';

export const REMOVE_ITEM = gql`
  mutation DeleteItem($deleteItemId: String!) {
    deleteItem(id: $deleteItemId)
  }
`

export const ADD_ITEM = gql`
  mutation CreateItem($title: String, $description: String) {
    createItem(title: $title, description: $description) {
      title
      id
      description
    }
  }
`