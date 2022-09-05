declare module 'StoreType' {
  import {StateType, ActionType} from 'typesafe-actions'

  export type Store = StateType<>
  export type RootAction = ActionType<typeof import('../store/rootAction').default>
  export type RootState = StateType<typeof import('../store/rootReducer').default>
}