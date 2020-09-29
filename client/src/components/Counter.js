import React from "react";
import PropTypes from "prop-types";

export default function Counter(props) {
  return (
    <div>
      <output onClick={props.increment}>{props.number}</output>
    </div>
  );
}

Counter.propTypes = {
  increment: PropTypes.func,
  number: PropTypes.func,
};
