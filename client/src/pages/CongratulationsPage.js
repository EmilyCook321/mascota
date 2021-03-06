import React from "react";
import { useHistory } from "react-router-dom";
import Counter from "../components/Counter";
import Header from "../components/Header";
import styled from "@emotion/styled";
import CongratsBubble from "../components/CongratsBubble";
import ContinueButton from "../components/ContinueButton";
import ChickIcon from "../assets/icons/standingchick.svg";

function CongratulationsPage() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/{Number(id) `);
  }

  return (
    <div>
      <Header />
      <Main>
        <img src={ChickIcon} alt="Standing Chick Icon" />
        <Counter />
        <CongratsBubble />
        <ContinueButton onClick={handleClick} />
      </Main>
    </div>
  );
}

export default CongratulationsPage;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
