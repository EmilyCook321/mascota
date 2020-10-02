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
  color: #ffffff;
  background-color: #d4561b;
  border-radius: 5px;
  width: 20%;
  height: 20%;
`;
