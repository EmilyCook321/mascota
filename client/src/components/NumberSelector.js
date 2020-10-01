import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function NumberSelector(props) {
  return (
    <Container>
      <NumberButton onClick={props.increment}>+</NumberButton>
      <span>{props.number}</span>
      <NumberButton onClick={props.decrement}>-</NumberButton>
    </Container>
  );
}

NumberSelector.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  number: PropTypes.number,
};

// styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;

const NumberButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
`;
