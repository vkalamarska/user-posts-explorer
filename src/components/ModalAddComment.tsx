import StyledReactModal from "styled-react-modal";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";

const StyledModal = StyledReactModal.styled`
  width: 22rem;
  height: 19rem;
  background-color:white;
  display: flex;
  flex-direction:column;
  border: 2px solid;
`;

const ModalHeader = styled.div`
  padding-left: 2px;
  font-size: 10px;
  font-weight: bold;
  border-bottom: 2px solid;
`;

const AddCommentLine = styled.div`
  margin: 8px 30px 14px 30px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const NameInputContainer = styled.div`
  margin: 0px 30px 5px 30px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const NameInput = styled.input`
  width: 82%;
  border: 2px solid;
`;

const EmailInputContainer = styled.div`
  margin: 0px 30px 5px 30px;
  display: flex;
  justify-content: space-between;
`;

const Email = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const EmailInput = styled.input`
  width: 82%;
  border: 2px solid;
`;

const BodyInputContainer = styled.div`
  height: 35%;
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const BodyInput = styled.textarea`
  width: 82%;
  border: 2px solid;
`;

const ButtonContainer = styled.div`
  margin: 18px 30px 15px 30px;
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  margin: 0 15px 0 0;
  height: 29px;
  width: 72px;
  box-shadow: 2px 2px 0px 0px #000000;
  background: linear-gradient(to bottom, #ffffff 5%, #0a65cd2c 100%);
  background-color: #ffffff;
  border: 2px solid #000000;
  display: inline-block;
  color: #000000;
  font-size: 10px;
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

const SaveButton = styled.button`
  height: 29px;
  width: 72px;
  box-shadow: 2px 2px 0px 0px #000000;
  background: linear-gradient(to bottom, #ffffffa0 5%, #0a65cd 100%);
  background-color: #0a65cd;
  border: 2px solid #000000;
  display: inline-block;
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #0a65cd 1%, #ffffffa0);
    background-color: #0a65cd;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const ModalFooter = styled.div`
  bottom: 0px;
  height: 14px;
  border-top: 2px solid;
`;

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
            if (!inputEmail.match(regexp)) {
              alert("Invalid email :(");
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
