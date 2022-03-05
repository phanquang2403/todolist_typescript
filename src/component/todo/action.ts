import { SET_JOB, ADD_JOB, DELETE_JOB } from "./valiable";
export interface Iaction {
  type: string;
  payload: any;
}
export const setJob = (payload: string): Iaction => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload: string): Iaction => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const deleteJob = (payload: number): Iaction => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
