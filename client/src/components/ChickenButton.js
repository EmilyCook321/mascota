import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Chicken from "../assets/icons/adultchicken.svg";

function SelectChicken() {
  return (
    <Button>
      <img src={Chicken} alt="Human icon" />
    </Button>
  );
}

export default SelectChicken;

SelectChicken.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  justify-content: center;
`;
