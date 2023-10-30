import styled from "styled-components";
import User from "../components/user/user";
import { useQuery, gql } from "@apollo/client";
import { IUser } from "../types/User";
import LoadingPage from "../components/loading-page/loading-page";
import { motion } from "framer-motion";

const UsersWrapper = styled.div`
  padding: 45px 90px 50px 90px;
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

  if (loading) return <LoadingPage />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <UsersWrapper>
        {data?.users.data.map((u) => (
          <User user={u} />
        ))}
      </UsersWrapper>
    </motion.div>
  );
};

export default UsersExplorer;
