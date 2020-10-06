import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
// import Human from "../assets/icons/human.svg";
import { ReactComponent as Human } from "../assets/icons/human.svg";

function SelectHuman() {
  return (
    <Button>
      {/* <img src={Human} alt="Human icon" /> */}
      <Human className="Human" />
    </Button>
  );
}

export default SelectHuman;

SelectHuman.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const Button = styled.button`
  justify-content: center;
`;
