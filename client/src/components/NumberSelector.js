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

NumberSelector.propTypes = { increment: PropTypes.func };
NumberSelector.propTypes = { decrement: PropTypes.func };
NumberSelector.propTypes = { number: PropTypes.number };
