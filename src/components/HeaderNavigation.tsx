import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import AddIcon from "../assets/add.svg";
import { Link } from "react-router-dom";

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

const AddButtonContainer = styled.div``;

const AddPostButton = styled.div`
  padding: 20px;
  background-image: url(${AddIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

interface IProps {
  userName: string;
  returnToPath: string;
  isAddButtonVisible?: boolean;
}

const HeaderNavigation = ({
  userName,
  returnToPath,
  isAddButtonVisible = false,
}: IProps) => {
  return (
    <HeaderWrapper>
      <ButtonBack to={returnToPath}></ButtonBack>
      <Header>{userName}</Header>
      <AddButtonContainer>
        {isAddButtonVisible && <AddPostButton></AddPostButton>}
      </AddButtonContainer>
    </HeaderWrapper>
  );
};

export default HeaderNavigation;
