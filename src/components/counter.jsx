import React from "react";
import { connect } from "react-redux";
import { increment } from "../actions";
import { decrement } from "../actions";
const Counter = (props) => {
  return (
    <div>
      <button className="increment" onClick={props.increment}>
        Increment
      </button>
      <button className="decrement" onClick={props.decrement}>
        decrement
      </button>
      current count: <span>{props.count}</span>
    </div>
  );
};
const mapToStateProps = (state) => {
  return { count: state.count };
};
export default connect(mapToStateProps, {
  increment,
  decrement,
})(Counter);
