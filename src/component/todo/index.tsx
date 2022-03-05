import React from "react";
import clsx from "clsx";
import style from "./style.module.css";
import Button from "../button";
import { useReducer, useRef } from "react";
import reduce from "./reduce";
import { initState, InitState } from "./initState";
import { addJob, deleteJob, setJob, Iaction } from "./action";

const Todolist = () => {
  const [state, dispatch] = useReducer<React.Reducer<InitState, Iaction>>(
    reduce,
    initState
  );
  const elementInput = React.useRef<HTMLInputElement | null>(null);
  const { job, jobs } = state;

  const handleAdd: any = () => {
    dispatch(addJob(job));
    elementInput.current?.focus();
    dispatch(setJob(""));
  };

  return (
    <div className="todo__cont">
      <h1 className={clsx(style.todo__title)}>Todo List</h1>
      <input
        ref={elementInput}
        type="text"
        className={clsx(style.todo__input)}
        placeholder="Enter ..."
        value={job}
        onChange={(e): void => dispatch(setJob(e.target.value))}
      />
      <Button handleSubmit={handleAdd} success>
        ADD
      </Button>
      {console.log(jobs)}
      <ul>
        {jobs.map((value, index): any => (
          <li key={index}>
            {value}
            <span
              onClick={() => dispatch(deleteJob(index))}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
