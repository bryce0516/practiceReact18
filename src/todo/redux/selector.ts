import { createSelector } from 'reselect';

import {TodosState} from './reducer'

export const getTodos = (state: TodosState) => state.todos
export const getTodoesFilter = (state: TodosState) => state.todosFilter

export const getFilteredTodos = createSelector(getTodos, getTodoesFilter, (todos, todosFilters) => {
  switch(todosFilters) {
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default: 
      return todos
  }
})