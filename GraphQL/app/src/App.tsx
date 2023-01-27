import React from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import TodoList from './TodoList';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  )
}

export default App
