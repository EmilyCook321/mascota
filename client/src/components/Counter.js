import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartIcon } from "../assets/icons/heart-icon.svg";
import styled from "@emotion/styled";

export default function Counter({ number }) {
  return (
    <Main>
      <CounterStyle>
        <Heart>
          <HeartIcon />
        </Heart>
        <output>{number}</output>
      </CounterStyle>
    </Main>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
};

const Main = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CounterStyle = styled.output`
  color: #ffffff;
  font-size: 40px;
`;

const Heart = styled.svg`
  color: #ff0000;
  width: 40px;
  height: 40px;
`;
