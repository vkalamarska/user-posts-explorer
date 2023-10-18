import styled from "styled-components";
import { useState } from "react";
import { IUser } from "../types/User";
import { IPost } from "../types/Post";
import { IComment } from "../types/Comment";
import Modal from "./ModalAddComment";

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

interface IProps {
  data: IApiResponse;
}

interface IApiResponse {
  user: Pick<IUser, "id" | "name">;
  post: IPost & { comments: { data: IComment[] } };
}

const CommentsSection = ({ data }: IProps) => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <CommentsExplorer>
      <Modal isOpen={open} onClose={onCloseModal} />
      <ButtonsContainer>
        <ShowCommentsButton onClick={() => setToggle(!toggle)}>
          {toggle ? `Hide Comments` : `Show Comments`}
        </ShowCommentsButton>
        {toggle && (
          <AddCommentButton onClick={onOpenModal}>Add Comment</AddCommentButton>
        )}
      </ButtonsContainer>
      {toggle && (
        <CommentsWrapper>
          {data.post.comments.data.map((c) => (
            <CommentContainer>
              <CommentHeader>
                <CommentTitle>{c.name}</CommentTitle>
                <Email href={`mailto:${c.email}`}>{c.email}</Email>
              </CommentHeader>
              <CommentBody>{c.body}</CommentBody>
            </CommentContainer>
          ))}
        </CommentsWrapper>
      )}
    </CommentsExplorer>
  );
};

export default CommentsSection;
