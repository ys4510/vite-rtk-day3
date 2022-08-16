import type { FC } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer: FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoContainer;
