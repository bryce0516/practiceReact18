import React from "react";
import { Observable, Observer } from "rxjs";

export function useSubscription<T>(
  source$: Observable<T>,
  nextHandler: (res: T) => void,
  errorHandler?: (res: any) => void
  // observer: Partial<Observer<any>>
) {
  React.useEffect(() => {
    if (source$) {
      const subs = source$.subscribe({
        next: nextHandler,
        error: errorHandler,
      });
      return () => {
        subs.unsubscribe();
      };
    }
  }, [source$]);
}
