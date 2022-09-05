import React from "react";
import { interval, map, tap } from "rxjs";
import { useObservable } from "../hook/useObservable";
import useReactiveCallback from "../hook/useSubject";
import { useSubscription } from "../hook/useSubscription";
import useCounter from "./hook/useCounter";

type Props = {};

const CounterScreen = (props: Props) => {
  // const [count, setCount] = React.useState<number>(0);
  // useSubscription(source$ , (n) => {
  //   setCount(n)
  // })
  const [count, errorMsg] = useCounter();
  const [callback, clicks$] = useReactiveCallback();

  const source$ = React.useMemo(
    () => clicks$.pipe(map((_: any, i: number) => i)),
    [clicks$]
  );

  const clickcount = useObservable(source$, 0)

  return (
    <div>
      <p>CounterScreen</p>
      <button onClick={callback}>click me</button>
      <p>clickCount : {clickcount}</p>
      <p>
        {count} {errorMsg}
      </p>
    </div>
  );
};

export default CounterScreen;
