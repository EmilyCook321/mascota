import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Human from "../assets/icons/human.svg";

function SelectHuman() {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return <Button value={checked} onClick={() => handleChange()}></Button>;
}

export default SelectHuman;

SelectHuman.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  justify-content: center;
  background-image: url(${Human});
  background-repeat: no-repeat;
  background-size: auto;
  background-color: ${({ value }) => (value ? "orange" : "--button-blue")};
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
