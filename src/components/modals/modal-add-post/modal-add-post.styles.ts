import StyledReactModal from "styled-react-modal";
import styled from "styled-components";

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

const AddPostLine = styled.div`
  margin: 8px 30px 23px 30px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const TitleInputContainer = styled.div`
  margin: 5px 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const TitleInput = styled.input`
  width: 82%;
  border: 2px solid;
`;

const BodyInputContainer = styled.div`
  height: 35%;
  margin: 5px 30px;
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

export {
  StyledModal,
  ModalHeader,
  AddPostLine,
  TitleInputContainer,
  Title,
  TitleInput,
  BodyInputContainer,
  BodyInput,
  Body,
  ModalFooter,
  ButtonContainer,
  CancelButton,
  SaveButton,
};
