import { useState } from "react";
import { toast } from "react-toastify";
import { PostTitle } from "./editable.styles";

interface IProps {
  title: string;
  onSubmit: (newValue: string) => void;
}

const Editable = ({ title, onSubmit }: IProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputValue, setInputValue] = useState(title);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(inputValue);
      setIsEditing(false);
      toast("Post updated");
    }
  };

  if (isEditing) {
    return (
      <input
        style={{ width: "100%", outline: "none" }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      ></input>
    );
  }

  return (
    <PostTitle
      title="Double-click to edit"
      onDoubleClick={() => setIsEditing(true)}
    >
      {title}
    </PostTitle>
  );
};

export default Editable;
