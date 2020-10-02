import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push(`/questions/1`);
  }

  return (
    <div>
      <p>How to Play! Click below to start</p>
      <SubmitButton onClick={handleClick} text="Los geht's!"></SubmitButton>
    </div>
  );
}

export default HomePage;
