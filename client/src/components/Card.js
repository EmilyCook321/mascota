import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`;

const Front = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffc0cb;
  color: #ffffff;
  width: 100%;
  height: 100%;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #0000ff;
  color: #ffffff;
  width: 100%;
  height: 100%;
`;

function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <Container onClick={() => setFlipped(!flipped)}>
      {flipped && <Front>{front}</Front>}
      {!flipped && <Back>{back}</Back>}
    </Container>
  );
}

export default Card;

Card.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string,
};
