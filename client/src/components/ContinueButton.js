import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ContinueButton({ onClick }) {
  return <Button onClick={onClick}>Weiter Lernen</Button>;
}

export default ContinueButton;

ContinueButton.propTypes = {
  changepage: PropTypes.func,
  onClick: PropTypes.func,
};

const Button = styled.button`
  margin: 0 auto;
  justify-content: center;
  color: #ffffff;
  background-color: orange;
  border-radius: 5px;
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
`;
