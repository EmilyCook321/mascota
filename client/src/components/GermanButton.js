import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SelectGerman() {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <Button value={checked} onClick={() => handleChange()}>
      German
    </Button>
  );
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
  font-size: 20px;
  background-color: ${({ value }) => (value ? "orange" : "--button-blue")};
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 50px;
`;
