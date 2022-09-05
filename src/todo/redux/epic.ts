import { RootAction, RootState } from "StoreType";
import { Epic } from "redux-observable";
import { filter, tap, ignoreElements } from "rxjs";
import { isOfType } from "typesafe-actions";
import * as todoType from "./type";

export const logAddAction: Epic<RootAction, RootAction, RootState, any> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(isOfType(todoType.ADD)),
    tap((action: any) => {
      console.log(
        `action type must be equal: ${todoType.ADD} === ${action.type}`
      );
    }),
    ignoreElements()
  );
};
