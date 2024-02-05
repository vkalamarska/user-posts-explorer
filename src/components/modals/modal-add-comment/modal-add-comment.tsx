import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  StyledModal,
  ModalHeader,
  AddCommentLine,
  NameInputContainer,
  NameInput,
  Name,
  Body,
  BodyInput,
  BodyInputContainer,
  ButtonContainer,
  CancelButton,
  Email,
  EmailInput,
  EmailInputContainer,
  ModalFooter,
  SaveButton,
} from "./modal-add-comment.styles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newName: string, newEmail: string, newBody: string) => void;
}

const ModalAddComment = ({ isOpen, onClose, onSubmit }: IProps) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputBody, setInputBody] = useState("");

  const handleInputNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputName(event.target.value);
  };

  const handleInputEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputEmail(event.target.value);
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
      <ModalHeader>Add comment</ModalHeader>
      <AddCommentLine>Add comment</AddCommentLine>
      <NameInputContainer>
        <Name>Name</Name>
        <NameInput
          value={inputName}
          onChange={handleInputNameChange}
        ></NameInput>
      </NameInputContainer>
      <EmailInputContainer>
        <Email>Email</Email>
        <EmailInput
          value={inputEmail}
          type="email"
          onChange={handleInputEmailChange}
        ></EmailInput>
      </EmailInputContainer>
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
            const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (inputEmail && !inputEmail.match(regexp)) {
              toast.error("Invalid email :(");
              return;
            }

            if (!inputEmail || !inputName || !inputBody) {
              toast.error("Each field is required");
              return;
            }

            onSubmit(inputName, inputEmail, inputBody);
            onClose();
            setInputName("");
            setInputEmail("");
            setInputBody("");
            toast("Comment saved");
          }}
        >
          Save
        </SaveButton>
      </ButtonContainer>
      <ModalFooter></ModalFooter>
    </StyledModal>
  );
};

export default ModalAddComment;
