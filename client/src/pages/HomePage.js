import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import styled from "@emotion/styled";
import Header from "../components/Header";
import GermanButton from "../components/GermanButton";
import SpanishButton from "../components/SpanishButton";
import HowToPlayBubble from "../components/HowToPlayBubble";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/1`);
  }

  return (
    <div>
      <Header />
      <Main>
        <h1>How to Play</h1>

        <Bubblestyling>
          <HowToPlayBubble />
        </Bubblestyling>
        <h2>Get Started</h2>
        <p>
          {" "}
          Which language would you like to learn? Select either German or
          Spanish
        </p>

        <SpanishButton />
        <GermanButton />

        <p>Which Mascota would you like to have?</p>

        <SubmitButton onClick={handleClick} text="Los geht's!"></SubmitButton>
      </Main>
    </div>
  );
}

export default HomePage;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Bubblestyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: 100%;
  margin: auto;
`;
