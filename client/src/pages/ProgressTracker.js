import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Counter from "../components/Counter";
import NewWorldBubble from "../components/NewWordBubble";
import Card from "../components/Card";

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
        <h3>Revise New Words</h3>
        <Container>
          <Card front="Kuchen" back="cake" />

          <Card front="Geschenk" back="present" />

          <Card front="glücklich" back="happy" />

          <Card front="Geburtstag" back="birthday" />

          <Card front="fliegen" back="to fly" />

          <Card front="Lernen" back="to study" />

          <ButtonStyle>
            <SubmitButton
              onClick={handleClick}
              text="Lerne weiter!"
            ></SubmitButton>
          </ButtonStyle>
        </Container>
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
  margin-top: 20%;
  margin-bottom: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 9px;
  margin-top: 5%;
  margin-bottom: 20%;
  margin-left: 30%;
  margin-right: 30%;
  text-align: center;
`;

// const CardStying1 = styled.div`
//   padding: 10px 10px;
// `;

// const CardStying2 = styled.div`
//   padding: 10px 10px;
// `;

// const CardStying3 = styled.div`
//   padding: 10px 10px;
// `;
// const CardStying4 = styled.div`
//   padding: 10px 10px;
// `;
// const CardStying5 = styled.div`
//   padding: 10px 10px;
// `;
// const CardStying6 = styled.div`
//   padding: 10px 10px;
// `;
