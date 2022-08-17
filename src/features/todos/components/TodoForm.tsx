import React, { useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createTodo } from "../todosSlice";
import { TodoInput } from "../../types";

const TodoForm: FC = () => {
  const [titleInput, settitleInput] = useState<string>("");
  const [bodyInput, setbodyInput] = useState<string>("");
  const todo = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    if (titleInput && bodyInput) {
      const newTodo: TodoInput = { title: titleInput, body: bodyInput };
      dispatch(createTodo(newTodo));
      settitleInput("");
      setbodyInput("");
    } else {
      alert("タイトルと本文の両方を入力してください");
    }
  };

  return (
    <div id="todo-form">
      <label>
        <span>タイトル：</span>
        <input
          type="text"
          name="title"
          id="title-input"
          placeholder="タイトルを入力"
          onChange={(e) => settitleInput(e.target.value)}
          value={titleInput}
        />
      </label>
      <label>
        <span>本文：</span>
        <input
          type="text"
          name="bodytext"
          id="body-text-input"
          placeholder="本文を入力"
          onChange={(e) => setbodyInput(e.target.value)}
          value={bodyInput}
        />
      </label>
      <button id="createBtn" onClick={handleOnClick}>
        作成
      </button>
    </div>
  );
};

export default TodoForm;

