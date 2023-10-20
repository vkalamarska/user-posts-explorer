import { useState } from "react";
import styled from "styled-components";

const PostTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

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
    <PostTitle onDoubleClick={() => setIsEditing(true)}>{title}</PostTitle>
  );
};

export default Editable;
