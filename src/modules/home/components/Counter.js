import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../store/reducer'

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="counter">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="btn"
      >
        Increment
      </button>
      <span className="count_value">{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className="btn"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
