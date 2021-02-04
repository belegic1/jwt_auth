 import React from 'react';
 import ReactDOM from 'react-dom';
 import { ApolloClient,
    createHttpLink,
     InMemoryCache, } from '@apollo/client';
  import {ApolloProvider } from '@apollo/react-hooks'
 import { getAccessToken,  } from './accessToken';
  import { setContext } from "@apollo/client/link/context";
 import App from './App';
 

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  };
});



const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  credentials: 'include',
  cache: new InMemoryCache(),
});
////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

