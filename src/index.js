import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const URI = Object.freeze({
  PROD_DEFAULT: "https://server-catstronauts.herokuapp.com/",
  PROD_HEROKU: "https://server-catstronauts-atrum.herokuapp.com/",
  LOCAL: 'http://localhost:4000'
})

const client = new ApolloClient({
  uri: URI.PROD_HEROKU, // change to YOUR own production server
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
