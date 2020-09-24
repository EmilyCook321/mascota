import React from "react";
import PropTypes from "prop-types";

export default function NumberSelector(props) {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <span>{props.number}</span>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

NumberSelector.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  number: PropTypes.number,
};
