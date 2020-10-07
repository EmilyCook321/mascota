import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Counter from "../components/Counter";
import NewWorldBubble from "../components/NewWordBubble";

function ProgressTracker() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/1`);
  }
  return (
    <div>
      <Header />
      <Main>
        <h1>Progress Tracker</h1>
        <Counter />
        <h2>New Words Learnt:</h2>
        <NewWorldBubble />
        <h3>Set Your Word Goal/Revise </h3>
        <ButtonStyle>
          <SubmitButton
            onClick={handleClick}
            text="Lerne weiter!"
          ></SubmitButton>
        </ButtonStyle>
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

const ButtonStyle = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
`;
