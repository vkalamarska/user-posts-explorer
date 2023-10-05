import styled from "styled-components";
import UsersExplorer from "./components/UsersExplorer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

function App() {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
  });

  return (
    <AppWrapper>
      <ApolloProvider client={client}>
        <UsersExplorer></UsersExplorer>
      </ApolloProvider>
    </AppWrapper>
  );
}

export default App;
