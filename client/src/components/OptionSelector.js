import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function OptionSelector({ values, onSelect }) {
  return (
    <Container>
      {values.map((value) => (
        <Button onClick={() => onSelect(value)} key={value}>
          {value}
        </Button>
      ))}
    </Container>
  );
}
OptionSelector.propTypes = {
  values: PropTypes.array,
  onSelect: PropTypes.func,
};

export default OptionSelector;

//Styling

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5%;
`;

const Button = styled.button`
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 3%;
  margin-left: 3%;
  color: #ffffff;
  background-color: #d4561b;
  border-radius: 5px;
  border: none;
  width: 70px;
  height: 40px;
`;
