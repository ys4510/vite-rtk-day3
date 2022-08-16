import { FC, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const [viewFlag, setViewFlag] = useState<string>("all");

  const handleOnChangeVF = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const currentFlag = e.target.value;
    setViewFlag(currentFlag);
  };

  return (
    <>
      <hr />
      <div id="todo-list">
        <label id="view-flag">
          <span>閲覧フラグ：</span>
          <select
            name="status"
            id="view-flag-select"
            onChange={(e) => handleOnChangeVF(e)}
            defaultValue={viewFlag}
          >
            <option value="" disabled  >--フラグを選択--</option>
            <option value="all">全て（削除済みは除く）</option>
            <option value="updated">変更済み（削除済みは除く）</option>
            <option value="deleted">削除済み</option>
          </select>
        </label>
        <table id="todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>本文</th>
              <th>ステータス</th>
              <th>作成日時</th>
              <th>更新日時</th>
              <th>削除日時</th>
              <th>更新ボタン</th>
              <th>削除ボタン</th>
            </tr>
          </thead>
          <tbody>
            {todos.length ? ( 
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <tr>
                <td colSpan={9}>{"データなし"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
