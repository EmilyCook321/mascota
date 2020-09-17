import React from "react";
import { getQuestions } from "./api/getQuestions";

function App() {
  async function test() {
    await getQuestions();
  }
  test();
  return (
    <div>
      <h1>Mascota</h1>
    </div>
  );
}

export default App;
