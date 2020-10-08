import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 55px;
  width: 55px;
  margin: 10px;
`;

const Front = styled.div`
  background-color: #ffa500;
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  background-color: #6c63ff;
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <Container onClick={() => setFlipped(!flipped)}>
      {flipped ? <Front>{front}</Front> : <Back>{back}</Back>}
    </Container>
  );
}

export default Card;

Card.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string,
};
