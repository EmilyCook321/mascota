import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import PropTypes from "prop-types";

function NumberQuestionPage(props) {
  const [question, setQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    async function fetchQuestion() {
      const NumberQuestion = await getQuestion(props.pageNumber);
      setQuestion(NumberQuestion);
    }
    fetchQuestion();
  }, []);

  return (
    <div>
      <h1>Question 1</h1>
      {question && (
        <>
          <QuestionBubble question={question.question} key={question.id} />
          <NumberSelector
            increment={() => setSelectedAnswer(selectedAnswer + 1)}
            decrement={() => setSelectedAnswer(selectedAnswer - 1)}
            number={selectedAnswer}
          />
          {question.answer === selectedAnswer && <h2>Richtig!</h2>}
        </>
      )}
    </div>
  );
}
export default NumberQuestionPage;
NumberQuestionPage.propTypes = {
  pageNumber: PropTypes.number,
};
