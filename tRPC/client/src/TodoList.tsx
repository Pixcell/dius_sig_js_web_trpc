import React from 'react'
import { getJoke } from './joke';
import { trpc } from './utils/trpc';

export const TodoList = () => {
  const { error, data, isFetching, refetch } = trpc.list.useQuery();
  const remove = trpc.delete.useMutation({
    onSuccess: () => {
      refetch();
    }
  });
  const add = trpc.create.useMutation({
    onSuccess: () => {
      refetch();
    }
  });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      {data.map(({ id, description, title }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => remove.mutate({ id })}>
            Remove
          </button>
          <br />
        </div>
      ))}
      <button onClick={async () => {
        const joke = await getJoke()
        add.mutate({
         title: joke.joke, description: 'Ha, ha, ha!',
        })
      }}>
        Add Item
      </button>
    </div>
  )
}

export default TodoList