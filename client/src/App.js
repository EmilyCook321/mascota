import React, { useState, useEffect } from "react";
// import GlobalStyles from "./GlobalStyles";
import { getQuestions } from "./api/getQuestions";
import QuestionBubble from "./components/QuestionBubble";

function App() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      const allQuestions = await getQuestions();
      setQuestions(allQuestions);
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Mascota</h1>
      {questions &&
        questions.map(({ question, id }) => (
          <QuestionBubble question={question} key={id} />
        ))}
    </div>
  );
}
export default App;
