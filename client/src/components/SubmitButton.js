import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SubmitButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  margin: 0 auto;
  justify-content: center;
  font-size: 15px;
  color: #ffffff;
  border-radius: 10px;
  width: 120px;
  height: 50px;
  background-color: #d4561b;
  border: none;
`;
