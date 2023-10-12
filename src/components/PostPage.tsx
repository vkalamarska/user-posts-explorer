import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderNavigation from "./HeaderNavigation";

const PostExplorer = styled.div`
  margin: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostPage = () => {
  const { userId, postId } = useParams();

  const FILMS_QUERY = gql`
    query GetUserWithPosts($userId: ID!, $postId: ID!) {
      user(id: $userId) {
        id
        name
      }

      post(id: $postId) {
        id
        title
        body
        comments {
          data {
            id
            name
            email
            body
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(FILMS_QUERY, {
    variables: {
      userId,
      postId,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <PostExplorer>
      <HeaderNavigation
        userName={data?.user.name}
        returnToPath={`/user/${data?.user.id}`}
      ></HeaderNavigation>
    </PostExplorer>
  );
};

export default PostPage;
