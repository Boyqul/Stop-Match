import React from "react";
import { useState, useEffect } from "react";
import styles from "./StopMatch.module.css";

const StopMatch = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!run) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }),
    [run];

  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>
          <span>Stop Match</span>
        </h1>
        <div className={styles["time-page"]}>
          <span className={styles["hour"]}>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className={styles["btns"]}>
          <button
            onClick={() => {
              setRun(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setRun(false);
            }}
          >
            Stop
          </button>
          <button
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopMatch;
