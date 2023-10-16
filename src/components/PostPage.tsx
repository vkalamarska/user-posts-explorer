import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderNavigation from "./HeaderNavigation";
import CommentsSection from "./CommentsSection";

const PostExplorer = styled.div`
  margin: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitleContainer = styled.div`
  width: 90%;
  margin: 0 0 25px 0;
  font-size: 25px;
  font-weight: bold;
`;

const PostContainer = styled.div`
  width: 90%;
  margin: 0 0 50px 0;
  font-size: 12px;
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
      <PostTitleContainer>{data?.post.title}</PostTitleContainer>
      <PostContainer>{data?.post.body}</PostContainer>
      <CommentsSection data={data}></CommentsSection>
    </PostExplorer>
  );
};

export default PostPage;
