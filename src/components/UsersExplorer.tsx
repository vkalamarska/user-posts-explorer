import styled from "styled-components";
import User, { IUser } from "./User";
import { useQuery, gql } from "@apollo/client";

const UsersWrapper = styled.div`
  margin: 45px 90px 50px 90px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface IApiResponse {
  data: IUser[];
}

const UsersExplorer = () => {
  const USERS_QUERY = gql`
    {
      users {
        data {
          id
          name
          email
          phone
          website
          company {
            name
            catchPhrase
            bs
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<{ users: IApiResponse }>(
    USERS_QUERY
  );

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
