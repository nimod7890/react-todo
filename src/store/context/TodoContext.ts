import { createContext } from 'react';
import { requestRemoveTodoProps, requestAddTodoProps, TodoState, requestAddHistoryProps, requestRemoveHistoryProps, requestRemoveLastRecentTodoProps, requestAddRecentTodoProps, requestUpdateTodoProps } from '../types/todoTypes';

const initialTodo = {
    recentTodoList: [],
    todoList: [],
    todoHistory: []
};

const initContext={
  todo: initialTodo,
  requestAddTodo: () => {},
  requestUpdateTodo: () => null,
  requestRemoveTodo: () => null,
  requestAddHistory: () => null,
  requestRemoveHistory: () => null,
  requestAddRecentTodo: () => null,
  requestRemoveLastRecentTodo: () => null
}

const TodoContext = createContext<{
  todo: TodoState;
  requestAddTodo:(payload: requestAddTodoProps) => void;
  requestUpdateTodo:(payload: requestUpdateTodoProps) => void;
  requestRemoveTodo: (payload: requestRemoveTodoProps) => void;
  requestAddHistory:(payload: requestAddHistoryProps) => void;
  requestRemoveHistory: (payload: requestRemoveHistoryProps) => void;
  requestAddRecentTodo:(payload: requestAddRecentTodoProps) => void;
  requestRemoveLastRecentTodo: (payload: requestRemoveLastRecentTodoProps) => void;
    }>(initContext);

export { TodoContext, initialTodo };

