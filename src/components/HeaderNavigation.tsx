import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import AddIcon from "../assets/add.svg";
import { Link } from "react-router-dom";
import Modal from "./ModalAddPost.tsx";
import { useState } from "react";

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

  &:active {
    position: relative;
    top: 1px;
  }
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

  &:active {
    position: relative;
    top: 1px;
  }
`;

interface IProps {
  userName: string;
  returnToPath: string;
  isAddButtonVisible?: boolean;
  onSubmit: (newTitle: string, newBody: string) => void;
}

const HeaderNavigation = ({
  userName,
  returnToPath,
  isAddButtonVisible = false,
  onSubmit,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <HeaderWrapper>
      <Modal isOpen={open} onClose={onCloseModal} onSubmit={onSubmit} />
      <ButtonBack to={returnToPath}></ButtonBack>
      <Header>{userName}</Header>
      <AddButtonContainer>
        {isAddButtonVisible && (
          <AddPostButton onClick={onOpenModal}></AddPostButton>
        )}
      </AddButtonContainer>
    </HeaderWrapper>
  );
};

export default HeaderNavigation;
