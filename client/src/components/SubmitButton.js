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
  color: #ffffff;
  border-radius: 5px;
`;

// const NumberButton = styled.button`
// background-color: #FFFFFF;
// border-radius: 5px;
// width: 30px;
// height: 30px;
// `;
