import styled from "styled-components";
import User from "./User";
import { useQuery, gql } from "@apollo/client";

const UsersWrapper = styled.div`
  width: 100%;
  margin: 90px 90px 30px 90px;
  display: flex;
  flex-wrap: wrap;
`;

const UsersExplorer = () => {
  const FILMS_QUERY = gql`
    {
      users {
        data {
          id
          name
          email
          phone
          website
          posts {
            data {
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
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <UsersWrapper>
      {data?.users.data.map((u) => (
        <User user={u}></User>
      ))}
    </UsersWrapper>
  );
};

export default UsersExplorer;
