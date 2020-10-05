import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Counter from "../components/Counter";
import NewWorldBubble from "../components/NewWordBubble";
import NewWordBubbleOverview from "../components/NewWordBubbleOverview";

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
        <h2>New Words Learnt: (no)</h2>
        <NewWorldBubble />
        <h3>New Words Learnt (Overview)</h3>
        <NewWordBubbleOverview />
        <p>Set Your Word Goal/Revise </p>
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
