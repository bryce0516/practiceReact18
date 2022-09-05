import { ADD, CHANGE_FILTER, TOGGLE } from "./type";



export const add = (res: any) => ({
  type: ADD,
  payload: res
})

export const toggle = (res: any) => ({
  type: TOGGLE,
  payload: res
})

export const changeFilter = (res:any) => ({
  type: CHANGE_FILTER,
  payload: res
})