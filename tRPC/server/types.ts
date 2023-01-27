import z from 'zod';

export const TodoConstraint = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string()
})

export const TodosConstraint = z.array(TodoConstraint);


export type Todo = z.infer<typeof TodoConstraint>;
export type Todos = z.infer<typeof TodosConstraint>;
export type TodoCreateRequest = Pick<Todo, 'title' | 'description'>;
export type TodoDeleteRequest = Pick<Todo, 'id'>;