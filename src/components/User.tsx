import styled from "styled-components";

const UserComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 36%;
  width: 16%;
  padding: 12px 12px 20px 12px;
  border: 3px solid black;
`;

const Name = styled.div`
  padding: 0 0 18px;
  font-size: 12px;
  font-weight: 600;
`;

const Email = styled.div`
  font-size: 12px;
  color: #3970a6;
`;

const PhoneNumber = styled.div`
  font-size: 12px;
  color: #3970a6;
`;
const WebSite = styled.div`
  margin: 0 0 18px 0;
  font-size: 12px;
  color: #3970a6;
`;

const Description = styled.div`
  margin: 0 0 26px 0;
  font-size: 12px;
`;

const DetailsButton = styled.button`
  margin: 0 auto;
  padding: 19px 51px;
  box-shadow: 2px 2px 0px 0px #000000;
  background-color: #ffffff;
  border: 2px solid #000000;
  display: inline-block;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  :active {
    position: relative;
    top: 1px;
  }
`;

const User = ({ user }) => {
  return (
    <UserComponent>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <PhoneNumber>{user.phone}</PhoneNumber>
      <WebSite>{user.website}</WebSite>
      {/* <Description>{user.post.data.title}</Description> */}
      <DetailsButton>Details</DetailsButton>
    </UserComponent>
  );
};

export default User;
