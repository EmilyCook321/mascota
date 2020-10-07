import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartIcon } from "../assets/icons/red-heart.svg";
import styled from "@emotion/styled";

export default function Counter({ number }) {
  return (
    <Main>
      <CounterStyle>
        <Heart>
          <HeartIcon />
        </Heart>
        <Number>
          <output>{number}</output>
        </Number>
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

const Number = styled.output`
  margin-top: 7%;
`;
const CounterStyle = styled.output`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
`;

const Heart = styled.svg`
  color: #ff0000;
  width: 40px;
  height: 40px;
`;
