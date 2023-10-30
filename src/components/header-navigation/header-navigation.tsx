import Modal from "../modals/modal-add-post/modal-add-post";
import { useState } from "react";
import {
  HeaderWrapper,
  ButtonBack,
  Header,
  AddButtonContainer,
  AddPostButton,
} from "./header-navigation.styles";

interface IProps {
  userName: string;
  returnToPath: string;
  isAddButtonVisible?: boolean;
  onSubmit?: (newTitle: string, newBody: string) => void;
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

  const shouldRenderModal = Boolean(isAddButtonVisible && onSubmit);

  return (
    <HeaderWrapper>
      {shouldRenderModal && (
        <Modal isOpen={open} onClose={onCloseModal} onSubmit={onSubmit!} />
      )}
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
