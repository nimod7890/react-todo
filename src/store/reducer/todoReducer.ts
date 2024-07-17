import { TODO_ACTION, TodoAction,  TodoState } from '../types/todoTypes';

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    
  switch (action.type) {

    case TODO_ACTION.ADD_TODO:
        state.todoList.unshift({
          status: '등록',
            registerDate: new Date(),
            title: action.payload.title
        });
      return { ...state};

    case TODO_ACTION.REMOVE_TODO:
        state.todoList.splice(action.payload.index,1);
      return { ...state };

    case TODO_ACTION.ADD_HISTORY:
      state.todoHistory.unshift({
        status: '등록',
        registerDate: new Date(),
        title: action.payload.title
      });
      return { ...state };

    case TODO_ACTION.REMOVE_HISTORY:
      state.todoHistory.splice(action.payload.index,1);
      return { ...state };

    case TODO_ACTION.ADD_RECENT_TODO:
      state.recentTodoList.unshift({
        status: '등록',
        registerDate: new Date(),
        title: action.payload.title
      });
      return { ...state };

    case TODO_ACTION.REMOVE_LAST_RECENT_TODO:
      state.recentTodoList.pop();
      return { ...state };
    
    case TODO_ACTION.UPDATE_TODO:
      state.todoList[action.payload.index].title = action.payload.title;
      return { ...state };

    default:
      return state;
  }
};

export default todoReducer;
