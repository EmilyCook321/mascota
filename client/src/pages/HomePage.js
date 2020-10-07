import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import styled from "@emotion/styled";
import Header from "../components/Header";
import GermanButton from "../components/GermanButton";
import SpanishButton from "../components/SpanishButton";
import HumanButton from "../components/HumanButton";
import ChickenButton from "../components/ChickenButton";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/1`);
  }

  return (
    <div>
      <Header />
      <Main>
        <Start>
          <h1>Get Started!</h1>
        </Start>
        <LanguageSelect>
          <p> Which language would you like to learn?</p>
        </LanguageSelect>
        <LanguageButtons>
          <SpanishButton />
          <Divider></Divider>
          <GermanButton />
        </LanguageButtons>

        <MascotaSelect>
          <p>Select your Mascota</p>
        </MascotaSelect>
        <MascotaContainer>
          <ChickenButton />
          <Divider></Divider>
          <HumanButton />
        </MascotaContainer>
        <StartButton>
          <SubmitButton onClick={handleClick} text="Los geht's!"></SubmitButton>
        </StartButton>
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

const Start = styled.div`
  margin-top: 5%;
`;

const MascotaSelect = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 10%;
`;

const MascotaContainer = styled.div`
  display: flex;
`;

const LanguageSelect = styled.div`
  font-size: 20px;
  padding: 10%;
`;

const LanguageButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
`;

const Divider = styled.div`
  margin: 10px;
`;

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
`;
