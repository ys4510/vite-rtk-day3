export type TodoId = string;
export type DateTime = string;

const TODO_STATUSES = ["未着手", "着手中", "保留中", "中止", "完了"] as const;

export type TodoStatus = typeof TODO_STATUSES[number];

export type Todo = {
  id: TodoId;
  title: string;
  body: string;
  status: TodoStatus;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt: DateTime;
};
