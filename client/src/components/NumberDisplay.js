import React from "react";
import PropTypes from "prop-types";

export default function NumberDisplay({ value }) {
  return <div>{value}</div>;
}

NumberDisplay.propTypes = { value: PropTypes.number };
