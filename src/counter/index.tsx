import React from "react";
import { interval, tap } from "rxjs";
import { useObservable } from "../hook/useObservable";
import { useSubscription } from "../hook/useSubscription";

type Props = {};

const CounterScreen = (props: Props) => {
  const source$ = React.useMemo(
    () =>
      interval(1000).pipe(
        tap((n) => {
          if (n % 2 === 0) {
            throw new Error("Error!!!!!!!!!");
          }
        })
      ),
    []
  );
  // const [count, setCount] = React.useState<number>(0);
  // useSubscription(source$ , (n) => {
  //   setCount(n)
  // })
  const [errorMsg, setErrorMsg] = React.useState<string>("")
  const count = useObservable(source$, 0, (err) => setErrorMsg(err.message));
  return (
    <div>
      <p>CounterScreen</p>
      <p>{count} {errorMsg}</p>
    </div>
  );
};

export default CounterScreen;
