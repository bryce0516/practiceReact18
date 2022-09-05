import React from 'react'
import { interval, tap } from 'rxjs';
import { useObservable } from '../../hook/useObservable';



const useCounter = () => {
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
  const [errorMsg, setErrorMsg] = React.useState<string>("")
  const count = useObservable(source$, 0, (err) => setErrorMsg(err.message));
  return [count, errorMsg] as const
}



export default useCounter
