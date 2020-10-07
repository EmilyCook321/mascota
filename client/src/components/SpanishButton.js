import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SelectSpanish({ onClick }) {
  return <Button onClick={onClick}>Spanish</Button>;
}

export default SelectSpanish;

SelectSpanish.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  background-color: #6c63ff;
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 50px;
`;
