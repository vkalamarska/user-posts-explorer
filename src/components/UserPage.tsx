import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import AddIcon from "../assets/add.svg";
import TrashIcon from "../assets/trash.svg";

const PostExplorer = styled.div`
  margin: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 55px 0;
`;

const ButtonBack = styled(Link)`
  padding: 20px;
  background-image: url(${BackIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const AddPostButton = styled.div`
  padding: 20px;
  background-image: url(${AddIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PostContainer = styled.div`
  width: 100%;
  margin: 0 0 6px 0;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  font-size: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  margin: 0 7px 0 0;
  padding: 10px;
  background-image: url(${TrashIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const DetailsButton = styled.button`
  border: 1px solid black;
`;

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

  const { data, loading, error } = useQuery(FILMS_QUERY, {
    variables: {
      id: userId,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <PostExplorer>
      <HeaderWrapper>
        <ButtonBack to={`/`}></ButtonBack>
        <Header>{data?.user.name}</Header>
        <AddPostButton></AddPostButton>
      </HeaderWrapper>
      {data?.user.posts.data.map((p) => (
        <PostContainer>
          <TitleWrapper>
            <DeleteButton></DeleteButton>
            <PostTitle>{p.title}</PostTitle>
          </TitleWrapper>
          <DetailsButton></DetailsButton>
        </PostContainer>
      ))}
    </PostExplorer>
  );
};

export default UserPage;
