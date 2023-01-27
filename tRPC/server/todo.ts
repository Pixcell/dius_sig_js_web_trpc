import type { Todo, TodoCreateRequest, TodoDeleteRequest } from './types';
import { TRPCError } from '@trpc/server';
import { v1 } from 'uuid';
import { items } from './data/todo.json';

let todos: Todo[] = items;

export const get = ({ input }: { input: string }) => {
    const found = todos.find((todo => todo.id === input));
    if (!found) {
        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `could not find todo item with id ${input}`,
        });
    }
    return found;
}

export const list = () => {
  return todos;
}

export const create = ({ input }: { input: TodoCreateRequest}) => {
  const newItem: Todo = { id: v1(), title: input.title, description: input.description };
  todos.push(newItem)
  return newItem
}

export const deleteProcedure = ({ input }: { input: TodoDeleteRequest}) => {
  todos = todos.filter(item => item.id !== input.id);
  return "success"
}
