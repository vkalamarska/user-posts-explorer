import { useState } from "react";
import { IUser } from "../../types/User";
import { IPost } from "../../types/Post";
import { IComment } from "../../types/Comment";
import Modal from "../modals/modal-add-comment/modal-add-comment";

interface IProps {
  data: IApiResponse | undefined;
  onSubmit: (newName: string, newEmail: string, newBody: string) => void;
}

interface IApiResponse {
  user: Pick<IUser, "id" | "name">;
  post: IPost & { comments: { data: IComment[] } };
}

const CommentsSection = ({ data, onSubmit }: IProps) => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <CommentsExplorer>
      <Modal isOpen={open} onClose={onCloseModal} onSubmit={onSubmit} />
      <ButtonsContainer>
        <ShowCommentsButton onClick={() => setToggle(!toggle)}>
          {toggle ? `Hide Comments` : `Show Comments`}
        </ShowCommentsButton>
        {toggle && (
          <AddCommentButton onClick={onOpenModal}>Add Comment</AddCommentButton>
        )}
      </ButtonsContainer>
      {toggle && data && (
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
