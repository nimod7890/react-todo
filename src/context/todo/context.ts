import { createContext, Dispatch, SetStateAction } from "react";
import { Todo } from "src/models/todo";

type TodoContextType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
  reorderTodos: (newOrder: Todo[]) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
