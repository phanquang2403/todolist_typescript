import React from "react";
import { Iaction } from "./action";
import { InitState } from "./initState";
import { SET_JOB, ADD_JOB, DELETE_JOB } from "./valiable";
const reduce: React.Reducer<InitState, Iaction> = (state, action) => {
  // return true;
  let newState: InitState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB: {
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    }
    case DELETE_JOB:
      {
        let newArr: string[];
        newArr = [...state.jobs];
        newArr.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newArr,
        };
      }
      break;
    default:
      throw new Error("action reduce todo list");
  }
  console.log(newState);

  return newState;
};

export default reduce;
