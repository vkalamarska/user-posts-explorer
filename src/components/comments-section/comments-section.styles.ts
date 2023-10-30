import styled from "styled-components";

const CommentsExplorer = styled.div`
  width: 90%;
`;

const ButtonsContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const ShowCommentsButton = styled.button`
  padding: 0;
  font-size: 12px;
  color: #0a65cd;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const AddCommentButton = styled.button`
  padding: 0;
  font-size: 12px;
  color: #0a65cd;
  border-top: none;
  border-bottom: 1px solid #0a65cd;
  border-left: none;
  border-right: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    position: relative;
    top: 1px;
  }
`;

const CommentsWrapper = styled.div``;

const CommentContainer = styled.div`
  margin: 9px 0;
  padding: 10px;
  border: 2px solid black;
  background-color: white;
`;

const CommentHeader = styled.div`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
`;

const CommentTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Email = styled.a`
  font-size: 12px;
  text-decoration: underline;
  color: #0a65cd;
`;

const CommentBody = styled.div`
  font-size: 12px;
`;

export {
  AddCommentButton,
  ButtonsContainer,
  CommentBody,
  CommentContainer,
  CommentHeader,
  CommentTitle,
  CommentsExplorer,
  CommentsWrapper,
  Email,
  ShowCommentsButton,
};
