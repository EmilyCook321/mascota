import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ReactComponent as HeartIcon } from "../assets/icons/heart-icon.svg";

export default function Counter(props) {
  return (
    <div>
      <HeartIcon />

      <output>{props.number}</output>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.func,
};

const div = styled.div`
  align-content: center;
  width: 100%;
  height: auto;
`;
