import styled from "styled-components";
import UsersExplorer from "./pages/users-explorer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ModalProvider } from "styled-react-modal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/user-page";
import PostPage from "./pages/post-page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: #0a65cd2c;
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
  {
    path: "/user/:userId/:postId",
    element: <PostPage></PostPage>,
  },
]);

function App() {
  const client = new ApolloClient({
    uri: "https://deafening-egg-production.up.railway.app",
    cache: new InMemoryCache(),
  });

  return (
    <AppWrapper>
      <ApolloProvider client={client}>
        <ModalProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </ModalProvider>
      </ApolloProvider>
    </AppWrapper>
  );
}

export default App;
