import React, { useState, useEffect } from "react";
// import GlobalStyles from "./GlobalStyles";
import { getQuestions } from "./api/getQuestions";
import NumberSelector from "./components/NumberSelector";
import QuestionBubble from "./components/QuestionBubble";

function App() {
  const [questions, setQuestions] = useState(null);
  const [count, setCount] = useState(0);

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
        questions.map(({ question, id, answer }) => (
          <>
            <QuestionBubble question={question} key={id} />

            <NumberSelector
              increment={() => setCount(count + 1)}
              decrement={() => setCount(count - 1)}
              number={count}
            />
            {answer === count && <h2>The answer is correct!</h2>}
          </>
        ))}
    </div>
  );
}
export default App;
