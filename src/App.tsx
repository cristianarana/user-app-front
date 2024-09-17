import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { HandleRouter } from "./Router";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HandleRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
