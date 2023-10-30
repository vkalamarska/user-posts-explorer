import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderNavigation from "../components/header-navigation/header-navigation";
import CommentsSection from "../components/comments-section/comments-section";
import { IUser } from "../types/User";
import { IPost } from "../types/Post";
import { IComment } from "../types/Comment";
import LoadingPage from "../components/loading-page/loading-page";

const PostExplorer = styled.div`
  padding: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostWrapper = styled.div`
  width: 90%;
  margin: 0 0 50px 0;
`;

const PostTitle = styled.div`
  margin: 0 0 25px 0;
  font-size: 25px;
  font-weight: bold;
`;

const PostBody = styled.div`
  font-size: 12px;
`;

const PostPage = () => {
  const { userId, postId } = useParams();

  const USERS_QUERY = gql`
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

  const CREATE_COMMENT_MUTATION = gql`
    mutation CreateCommentMutation($input: CreateCommentInput!) {
      createComment(input: $input) {
        id
      }
    }
  `;

  const { data, loading, error } = useQuery<{
    user: Pick<IUser, "id" | "name">;
    post: IPost & { comments: { data: IComment[] } };
  }>(USERS_QUERY, {
    variables: {
      userId,
      postId,
    },
  });

  const [createComment, {}] = useMutation(CREATE_COMMENT_MUTATION);

  if (loading) return <LoadingPage />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <PostExplorer>
      <HeaderNavigation
        userName={data?.user.name || ""}
        returnToPath={`/user/${data?.user.id}`}
      ></HeaderNavigation>
      <PostWrapper>
        <PostTitle>{data?.post.title}</PostTitle>
        <PostBody>{data?.post.body}</PostBody>
      </PostWrapper>
      <CommentsSection
        data={data}
        onSubmit={(newName, newEmail, newBody) => {
          createComment({
            variables: {
              input: {
                name: newName,
                email: newEmail,
                body: newBody,
              },
            },
          });
        }}
      ></CommentsSection>
    </PostExplorer>
  );
};

export default PostPage;
