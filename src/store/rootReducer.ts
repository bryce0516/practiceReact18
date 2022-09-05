import { combineReducers } from "redux"
import todosReducer from '../todo/redux/reducer'



const rootReducer = combineReducers({
  todos: todosReducer 
})


export default rootReducer