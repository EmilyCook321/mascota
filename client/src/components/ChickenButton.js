import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Chicken from "../assets/icons/standingchick.svg";

function SelectChicken() {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return <Button value={checked} onClick={() => handleChange()}></Button>;
}

export default SelectChicken;

SelectChicken.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  justify-content: center;
  background-image: url(${Chicken});
  background-repeat: no-repeat;
  background-size: auto;
  background-color: ${({ value }) => (value ? "orange" : "--button-blue")};
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
