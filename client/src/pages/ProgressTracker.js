import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import styled from "@emotion/styled";

function ProgressTracker() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/1`);
  }
  return (
    <div>
      <Header />
      <Main>
        <p>Progress Tracker</p>
        <SubmitButton onClick={handleClick} text="Lerne weiter!"></SubmitButton>
      </Main>
    </div>
  );
}

export default ProgressTracker;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
