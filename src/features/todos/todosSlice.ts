import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoId, TodoInput } from "../types";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { getCurrentDateTime } from "./utils/getCurrentDateTime";
import { RootState } from "../../app/store";

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      title: "タイトル１",
      body: "本文１",
      status: "未着手",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: "",
    },
    {
      id: uuidv4(),
      title: "タイトル２",
      body: "本文２",
      status: "未着手",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: getCurrentDateTime(),
    },
    {
      id: uuidv4(),
      title: "タイトル３",
      body: "本文３３３",
      status: "未着手",
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime(),
      deletedAt: "",
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoInput>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        title: action.payload.title,
        body: action.payload.body,
        status: "未着手",
        createdAt: getCurrentDateTime(),
        updatedAt: "",
        deletedAt: "",
      };

      state.todos.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const currentTodo = action.payload;
      state.todos.filter((t, index) => {
        if (currentTodo.id === t.id) {
          state.todos[index] = currentTodo;
        }
      });
    },
    deleteTodo: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      state.todos.filter((t, index) => {
        if (id === t.id) {
          state.todos[index].deletedAt = dayjs().format("M-D-YY H:m:ss");
        }
      });
    },
    restoreTodo: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      state.todos.filter((t, index) => {
        if (id === t.id) {
          state.todos[index].deletedAt = "";
        }
      });
    },
  },
});


export const selectTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.deletedAt === "");

  export const selectUpdatedTodos = (state: RootState) =>
    state.todos.todos.filter((todo) => todo.deletedAt === "" && todo.updatedAt !== '');
  
export const selectDeletedTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.deletedAt !== "");

export const { createTodo, updateTodo, deleteTodo, restoreTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
