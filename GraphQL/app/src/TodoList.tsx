import React from 'react'

import { GET_LIST } from './graphql/operations/queries';
import { REMOVE_ITEM, ADD_ITEM } from './graphql/operations/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { getJoke } from './joke';

export const TodoList = () => {
  const { loading, error, data } = useQuery(GET_LIST);
  const [remove] = useMutation(REMOVE_ITEM, {
    refetchQueries: [{ query: GET_LIST }],
  });
  const [add] = useMutation(ADD_ITEM, {
    refetchQueries: [{ query: GET_LIST }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Not found</p>;



  return (
    <div>
      {data.list.map(({ id, description, title }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => {
            remove({
              variables: { deleteItemId: id },
            })
          }}>
            Remove
          </button>
          <br />
        </div>
      ))}
      <button onClick={async () => {
        const joke = await getJoke()
        add({
          variables: { title: joke.joke, description: 'Ha, ha, ha!' },
        })
      }}>
        Add Item
      </button>
    </div>
  )
}

export default TodoList