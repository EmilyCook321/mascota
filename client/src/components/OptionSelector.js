import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function OptionSelector({ values, onSelect }) {
  return (
    <div>
      {values.map((value) => (
        <Button onClick={() => onSelect(value)} key={value}>
          {value}
        </Button>
      ))}
    </div>
  );
}
OptionSelector.propTypes = {
  values: PropTypes.array,
  onSelect: PropTypes.func,
};

export default OptionSelector;

//Styling

const Button = styled.button`
  background-color: #9e38d5;
`;
