import styled from "styled-components";
import UsersExplorer from "./components/UsersExplorer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./components/UserPage";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersExplorer></UsersExplorer>,
  },
  {
    path: "/user/:userId",
    element: <UserPage></UserPage>,
  },
]);

function App() {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
  });

  return (
    <AppWrapper>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AppWrapper>
  );
}

export default App;
