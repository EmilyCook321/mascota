import React, { useState, useEffect } from "react";
// import GlobalStyles from "./GlobalStyles";
import { getQuestions } from "./api/getQuestions";
import NumberSelector from "./components/NumberSelector";
import OptionSelector from "./components/OptionSelector";
import QuestionBubble from "./components/QuestionBubble";
// import styled from "@emotion/styled";

import NumberQuestionPage from "./pages/NumberQuestionPage";
import TranslationQuestionPage from "./pages/TranslationQuestionPage";

function App() {
  const [questions, setQuestions] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const allQuestions = await getQuestions();
      setQuestions(allQuestions);
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <NumberQuestionPage pageNumber="1"></NumberQuestionPage>
      <NumberQuestionPage pageNumber="2"></NumberQuestionPage>
      <TranslationQuestionPage pageNumber="3"></TranslationQuestionPage>
      <TranslationQuestionPage pageNumber="4"></TranslationQuestionPage>
      <h1>Mascota</h1>

      {questions &&
        questions.map(({ question, id, answer, options }) => (
          <>
            <QuestionBubble question={question} key={id} />

            {options ? (
              <OptionSelector
                values={options}
                onSelect={(answer) => setSelectedAnswer(answer)}
              />
            ) : (
              <NumberSelector
                increment={() => setSelectedAnswer(selectedAnswer + 1)}
                decrement={() => setSelectedAnswer(selectedAnswer - 1)}
                number={selectedAnswer}
              />
            )}
            {answer === selectedAnswer && <h2>Richtig!</h2>}
          </>
        ))}
    </div>
  );
}
export default App;
