import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DeleteIcon from "../assets/delete.svg";
import DetailsIcon from "../assets/chevron-right.svg";
import HeaderNavigation from "./HeaderNavigation";

const PostsExplorer = styled.div`
  margin: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100%;
  margin: 0 0 8px 0;
  padding: 6px 11px;
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  margin: 0 7px 0 0;
  padding: 12px;
  background-image: url(${DeleteIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const DetailsButton = styled(Link)`
  padding: 15px;
  background-image: url(${DetailsIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

interface IPostData {
  id: string;
  title: string;
  body: string;
}

interface IApiResponse {
  id: string;
  name: string;
  posts: {
    data: IPostData[];
  };
}

const UserPage = () => {
  const { userId } = useParams();

  const FILMS_QUERY = gql`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        posts {
          data {
            id
            title
            body
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<{ user: IApiResponse }>(
    FILMS_QUERY,
    {
      variables: {
        id: userId,
      },
    }
  );

  if (loading) return <div>Loading</div>;
  if (!data || error) return <pre>{error?.message}</pre>;

  return (
    <PostsExplorer>
      <HeaderNavigation
        userName={data.user.name}
        returnToPath={"/"}
      ></HeaderNavigation>
      <PostWrapper>
        {data?.user.posts.data.map((p) => (
          <PostContainer>
            <TitleWrapper>
              <DeleteButton></DeleteButton>
              <PostTitle>{p.title}</PostTitle>
            </TitleWrapper>
            <DetailsButton to={`/user/${data.user.id}/${p.id}`}></DetailsButton>
          </PostContainer>
        ))}
      </PostWrapper>
    </PostsExplorer>
  );
};

export default UserPage;
