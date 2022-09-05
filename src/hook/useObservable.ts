import React from "react";
import { Observable } from "rxjs";
import { useSubscription } from "./useSubscription";

export function useObservable<T>(
  source$: Observable<T>,
  initialState: T,
  errorHandler?: (res: any) => void
): T {
  const [value, setValue] = React.useState(initialState);

  useSubscription(source$, setValue, errorHandler);
  return value;
}
