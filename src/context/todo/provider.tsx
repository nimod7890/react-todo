import { PropsWithChildren, useState } from "react";
import { TodoContext } from "./context";
import { Todo } from "src/models/todo";

export default function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => setTodos((prev) => [...prev, todo]);
  const deleteTodo = (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id));
  const toggleComplete = (id: string) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  const updateTodo = (id: string, newText: string) =>
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  const reorderTodos = (newOrder: Todo[]) => setTodos(newOrder);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, deleteTodo, toggleComplete, updateTodo, reorderTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
