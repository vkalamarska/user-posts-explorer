import { useState } from "react";
import { toast } from "react-toastify";
import {
  StyledModal,
  ModalHeader,
  AddPostLine,
  TitleInputContainer,
  Title,
  TitleInput,
  BodyInputContainer,
  Body,
  BodyInput,
  ButtonContainer,
  CancelButton,
  SaveButton,
  ModalFooter,
} from "./modal-add-post.styles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newTitle: string, newBody: string) => void;
}

const ModalAddPost = ({ isOpen, onClose, onSubmit }: IProps) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const handleInputTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputTitle(event.target.value);
  };

  const handleInputBodyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputBody(event.target.value);
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <ModalHeader>Add post</ModalHeader>
      <AddPostLine>Add post</AddPostLine>
      <TitleInputContainer>
        <Title>Title</Title>
        <TitleInput
          value={inputTitle}
          onChange={handleInputTitleChange}
        ></TitleInput>
      </TitleInputContainer>
      <BodyInputContainer>
        <Body>Body</Body>
        <BodyInput
          value={inputBody}
          onChange={handleInputBodyChange}
        ></BodyInput>
      </BodyInputContainer>
      <ButtonContainer>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <SaveButton
          onClick={() => {
            onSubmit(inputTitle, inputBody);
            onClose();
            setInputTitle("");
            setInputBody("");
            toast("Post saved");
          }}
        >
          Save
        </SaveButton>
      </ButtonContainer>
      <ModalFooter></ModalFooter>
    </StyledModal>
  );
};

export default ModalAddPost;
