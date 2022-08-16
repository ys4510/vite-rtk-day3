import { FC } from "react";
import { Todo } from "../../types";
import { updateTodo, deleteTodo, restoreTodo } from "../todosSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import dayjs from "dayjs";

type Props = {
  key: string;
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleOnClickUpdate = () => {
    dispatch(
      updateTodo({ ...todo, updatedAt: dayjs().format("M-D-YY H:m:ss") })
    );
  };

  const handleOnClickDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleOnClickRestore = () => {
    console.log('restore')
    dispatch(restoreTodo(todo.id));
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{todo.status}</td>
      <td>{todo.createdAt}</td>
      <td>{todo.updatedAt ? todo.updatedAt : "なし"}</td>
      <td>{todo.deletedAt ? todo.deletedAt : "なし"}</td>
      <td>
        <button
          onClick={handleOnClickUpdate}
          disabled={todo.deletedAt ? true : false}
        >
          更新
        </button>
      </td>
      <td>
        {todo.deletedAt ? (
          <button onClick={handleOnClickRestore}>削除取消</button>
        ) : (
          <button onClick={handleOnClickDelete}>削除</button>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
