import { Subject } from 'rxjs';
import React from "react"

function useReactiveCallback<T>() {
  const reactiveRef = React.useRef(null as any)

  if(!reactiveRef.current) {

    const subject = new Subject<T>()
    const callback = (value: T) => subject.next(value)

    const observable = subject.asObservable()
    reactiveRef.current = [
      callback,
      observable
    ] as const
  }
  return reactiveRef.current
}


export default useReactiveCallback