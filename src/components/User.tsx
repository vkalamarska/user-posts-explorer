import { Link } from "react-router-dom";
import styled from "styled-components";
import { IUser } from "../types/User";

const UserComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 200px;
  margin: 10px 21px;
  padding: 15px 10px 15px 10px;
  border: 2px solid black;
`;

const Name = styled.div`
  margin: 0 0 15px;
  font-size: 10px;
  font-weight: 600;
`;

const Email = styled.a`
  font-size: 10px;
  text-decoration: underline;
  color: #0a65cd;
`;

const PhoneNumber = styled.a`
  font-size: 10px;
  text-decoration: underline;
  color: #0a65cd;
`;

const WebSite = styled.a`
  margin: 0 0 15px 0;
  font-size: 10px;
  text-decoration: underline;
  color: #0a65cd;
`;

const Company = styled.div`
  margin: 0 0 1px 0;
  font-size: 10px;
`;

const CatchPhrase = styled.div`
  margin: 0 0 1px 0;
  font-size: 10px;
`;

const Bs = styled.div`
  margin: 0 0 30px 0;
  font-size: 10px;
  font-weight: bold;
`;

const DetailsButton = styled(Link)`
  margin: 0 auto;
  padding: 19px 60px;
  box-shadow: 2px 2px 0px 0px #000000;
  background: linear-gradient(to bottom, #ffffff 5%, #0a65cd2c 100%);
  background-color: #ffffff;
  border: 2px solid #000000;
  display: inline-block;
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #0a65cd2c 5%, #ffffff 100%);
    background-color: #ffffff;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

interface IProps {
  user: IUser;
}

const User = ({ user }: IProps) => {
  return (
    <UserComponent>
      <Name>{user.name}</Name>
      <Email href={`mailto:${user.email}`}>{user.email}</Email>
      <PhoneNumber>{user.phone}</PhoneNumber>
      <WebSite>{user.website}</WebSite>
      <Company>{user.company.name}</Company>
      <CatchPhrase>{user.company.catchPhrase}</CatchPhrase>
      <Bs>{user.company.bs}</Bs>
      <DetailsButton to={`/user/${user.id}`}>Details</DetailsButton>
    </UserComponent>
  );
};

export default User;
