import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoId, TodoInput } from "../types";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { getCurrentDateTime } from "./utils/getCurrentDateTime";

const initialState: Todo[] = [
  {
    id: uuidv4(),
    title: "はじめのタイトル",
    body: "はじめの本文",
    status: "未着手",
    createdAt: getCurrentDateTime(),
    updatedAt: "",
    deletedAt: "",
  },
  {
    id: uuidv4(),
    title: "タイトル2",
    body: "本文2",
    status: "未着手",
    createdAt: getCurrentDateTime(),
    updatedAt: "",
    deletedAt: "12-24-21 0:30:00",
  },
  {
    id: uuidv4(),
    title: "タイトル3",
    body: "本文3",
    status: "未着手",
    createdAt: getCurrentDateTime(),
    updatedAt: "10-10-30 1:1:1",
    deletedAt: "12-24-21 0:30:00",
  },
  {
    id: uuidv4(),
    title: "タイトル4",
    body: "本文4",
    status: "未着手",
    createdAt: getCurrentDateTime(),
    updatedAt: "11-11-30 1:1:1",
    deletedAt: "",
  },
];

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
        createdAt: dayjs().format('M-D-YY H:m:ss'),
        updatedAt: "",
        deletedAt: "",
      };

      state.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const currentTodo = action.payload;
      state.filter((t, index )=> {
       if (currentTodo.id === t.id) {
        state[index] = currentTodo;
       }
      } );
    },
    deleteTodo: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      state.filter((t, index )=> {
        if (id === t.id) {
         state[index].deletedAt = dayjs().format('M-D-YY H:m:ss');

        }
       } );
    },
    restoreTodo: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      state.filter((t, index )=> {
        if (id === t.id) {
         state[index].deletedAt = '';

        }
       } );
    },
  },
});

export const { createTodo, updateTodo, deleteTodo, restoreTodo } = todosSlice.actions;
export default todosSlice.reducer;
