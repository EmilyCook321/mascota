import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SelectGerman({ onClick }) {
  return <Button onClick={onClick}>German</Button>;
}

export default SelectGerman;

SelectGerman.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.array,
};

const Button = styled.button`
  justify-content: center;
  color: #ffffff;
`;
