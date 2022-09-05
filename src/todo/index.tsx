import React from "react";
import * as selector from "./redux/selector";
import * as todoAction from './redux/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodos } from "./redux/selector";
import { RootState } from "StoreType";
type Props = {};

const TodoScreen = (props: Props) => {
  const dispatch = useDispatch()
  const selector = useSelector((state: RootState) => [
    getTodos(state.todos)
  ], shallowEqual)
  const [state, setState] = React.useState<string>("");
  let id = 0 
  const handleChange = (event: any) => {
    event.preventDefault();
    console.log(event.target.value);

    setState(event.target.value);
  };

  const handleClick = () => {
    dispatch(todoAction.add({
      id: id++,
      title: state,
      completed: false
    }))
  }
  const handleGetTodos = () => {
    console.log(selector)
  }
  return (
    <div>
      <p>this is to do screen</p>
      <input onChange={handleChange}></input>
      <div>
        <p>{state}</p>
      </div>

      <div>
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <button onClick={handleGetTodos}>getTodos</button>
      </div>
    </div>
  );
};
export default TodoScreen