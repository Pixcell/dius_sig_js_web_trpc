import {
  MutationCreateItemArgs,
  MutationUpdateItemArgs,
  MutationDeleteItemArgs,
  Item
} from './graphql-types'
import {v1 as uuidV1} from 'uuid'

const todoList = require('./data/todo.json')

export const resolvers = {
  Query: {
    list: () => todoList.items,
  },
  Mutation: {
    createItem(_: any, {title, description}: MutationCreateItemArgs) {
      const item = {id: uuidV1(), title, description}
      todoList.items.push(item)
      return item
    },
    updateItem(_: any, {id, title, description}: MutationUpdateItemArgs) {
      const item = todoList.items.find((i: Item)  => i.id === id)
      if(item) {
        item.title = title
        item.description = description
        return item
      }
      throw new Error('Id not found');
    },
    deleteItem(_: any, {id}: MutationDeleteItemArgs) {
      const idx = todoList.items.findIndex((i: Item) => i.id === id)
      if(idx !== -1) {
        todoList.items.splice(idx, 1)
        return `Item ${id} deleted with success`
      }
      throw new Error('Id not found');
    }
  }
};