import { combineReducers } from "redux"


export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;

const initialState =  {
  todos: [],
  todosFilter: ''
}
export default combineReducers({
  todos: (state: initialState.todos, action) => {
    switch(action.type) {
      case ADD:
        return [...state, action.payload]
      default :
      return state
    }
  }
})


export default todoReducer