import { combineReducers } from "redux";
import { ActionType } from "typesafe-actions";
import { Todo, TodosFilter } from "./interface";
import * as todoAction from "./action";
import { ADD, CHANGE_FILTER, TOGGLE } from "./type";

export type TodosAction = ActionType<typeof todoAction>;

export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;

const initialState: TodosState = {
  todos: [],
  todosFilter: TodosFilter.All,
};

export default combineReducers<TodosState, TodosAction>({
  todos: (state = initialState.todos, action) => {
    switch (action.type) {
      case ADD:
        return [...state, action.payload];
      case TOGGLE:
        return state.map((element) => {
          return element.id === action.payload
            ? { ...element, completed: !element.completed }
            : element;
        });

      default:
        return state;
    }
  },
  todosFilter: (state = initialState.todosFilter, action) => {
    switch (action.type) {
      case CHANGE_FILTER:
        return action.payload;

      default:
        return state;
    }
  },
});
