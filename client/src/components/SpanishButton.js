import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SelectSpanish() {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <Button value={checked} onClick={() => handleChange()}>
      Spanish
    </Button>
  );
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
  background-color: ${({ value }) => (value ? "orange" : "--button-blue")};
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 50px;
`;
