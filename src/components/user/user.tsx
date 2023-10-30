import { IUser } from "../../types/User";
import React from "react";
import {
  Bs,
  CatchPhrase,
  Company,
  DetailsButton,
  Email,
  PhoneNumber,
  WebSite,
  Name,
  UserComponent,
} from "../user/user.styles";

interface IProps {
  user: IUser;
}

const User = ({ user }: IProps) => {
  return (
    <UserComponent>
      <Name>{user.name}</Name>
      <Email href={`mailto:${user.email}`}>{user.email}</Email>
      <PhoneNumber>{user.phone}</PhoneNumber>
      <WebSite href={user.website}>{user.website}</WebSite>
      <Company>{user.company.name}</Company>
      <CatchPhrase>{user.company.catchPhrase}</CatchPhrase>
      <Bs>{user.company.bs}</Bs>
      <DetailsButton to={`/user/${user.id}`}>Details</DetailsButton>
    </UserComponent>
  );
};

export default User;
