import { useState, FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { createTodo } from "../todosSlice";
import { TodoInput } from "../../types";
import {resetFocus} from "../utils/resetFocus"

const TodoForm: FC = () => {
  const [titleInput,setTitleInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleOnCreate = () => {
    try {
      if (titleInput && bodyInput) {
        const newTodo: TodoInput = { title: titleInput, body: bodyInput };
        dispatch(createTodo(newTodo));
       setTitleInput("");
        setBodyInput("");
      } else {
        throw new Error('タイトルと本文の両方を入力してください');
      }
    } catch(error) {
      alert(error);
    }
    resetFocus();
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
          onChange={(e) => setTitleInput(e.target.value)}
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
          onChange={(e) => setBodyInput(e.target.value)}
          value={bodyInput}
        />
      </label>
      <button id="createBtn" onClick={handleOnCreate}>
        作成
      </button>
    </div>
  );
};

export default TodoForm;
