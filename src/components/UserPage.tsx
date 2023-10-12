import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import AddIcon from "../assets/add.svg";
import DeleteIcon from "../assets/delete.svg";
import DetailsIcon from "../assets/chevron-right.svg";

const PostExplorer = styled.div`
  margin: 35px 90px 50px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
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

const DetailsButton = styled.button`
  padding: 15px;
  background-image: url(${DetailsIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
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
      <PostWrapper>
        {data?.user.posts.data.map((p) => (
          <PostContainer>
            <TitleWrapper>
              <DeleteButton></DeleteButton>
              <PostTitle>{p.title}</PostTitle>
            </TitleWrapper>
            <DetailsButton></DetailsButton>
          </PostContainer>
        ))}
      </PostWrapper>
    </PostExplorer>
  );
};

export default UserPage;
