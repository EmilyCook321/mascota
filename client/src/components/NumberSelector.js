import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function NumberSelector(props) {
  return (
    <Container>
      <NumberButton onClick={props.increment}>+</NumberButton>
      <Number>
        <span>{props.number}</span>
      </Number>
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
  padding-top: 10%;
  padding-left: 30%;
  padding-right: 30%;
  padding-bottom: 10%;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
`;
const NumberButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 25px;
  border: none;
  width: 60px;
  height: 40px;
`;
