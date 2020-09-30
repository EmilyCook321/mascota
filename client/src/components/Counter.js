import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartIcon } from "../assets/icons/heart-icon.svg";
import styled from "@emotion/styled";

export default function Counter({ number }) {
  return (
    <CounterStyle>
      <Heart>
        <HeartIcon />
      </Heart>

      <output>{number}</output>
    </CounterStyle>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
};

const CounterStyle = styled.output`
  color: #ffffff;

  /* position: relative; */
`;

const Heart = styled.svg`
  color: #ff0000;
`;
