import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function NumberSelector(props) {
  return (
    <div>
      <NumberButton onClick={props.increment}>+</NumberButton>
      <span>{props.number}</span>
      <NumberButton onClick={props.decrement}>-</NumberButton>
    </div>
  );
}

NumberSelector.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  number: PropTypes.number,
};

// styling
const NumberButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  height: 100%;
  width: auto;
  justify-items: center;
`;
