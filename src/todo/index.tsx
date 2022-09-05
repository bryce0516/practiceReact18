import React from "react";
import * as selector from "./redux/selector";
import * as todoAction from "./redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/selector";
import { RootState } from "StoreType";
type Props = {};
let id = 1
const TodoScreen = (props: Props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state)
  const [getTodo] = useSelector(
    (state: RootState) => [getTodos(state.todos)],
    shallowEqual
  );
  const [state, setState] = React.useState<string>("");

  const handleChange = (event: any) => {
    event.preventDefault();

    setState(event.target.value);
  };

  const handleClick = () => {
    dispatch(
      todoAction.add({
        id: id++,
        title: state,
        completed: false,
      })
    );
  };
  const handleGetTodos = () => {
    console.log(getTodo);
  };

  const hadnleCheckState = () => {
    console.log(selector)
  }
  return (
    <div>
      <p>this is to do screen</p>
      <input onChange={handleChange}></input>
      <div>
        <p>current : {state}</p>
      </div>

      <div>
        <button onClick={handleClick}>add</button>
      </div>

      <div>
        {getTodo.map((element: any, index: number) => {
          return (
            <div key={index}>
              <p>{element.id}</p>
              <p>{element.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={handleGetTodos}>getTodos</button>
      </div>
      <div>
        <button onClick={hadnleCheckState}>checkState</button>
      </div>
    </div>
  );
};
export default TodoScreen;
