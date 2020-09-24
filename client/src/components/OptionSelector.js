import React from "react";
import PropTypes from "prop-types";

function OptionSelector({ values, onSelect }) {
  return (
    <div>
      {values.map((value) => (
        <button onClick={() => onSelect(value)} key={value}>
          {value}
        </button>
      ))}
    </div>
  );
}
OptionSelector.propTypes = {
  values: PropTypes.array,
  onSelect: PropTypes.func,
};

export default OptionSelector;
