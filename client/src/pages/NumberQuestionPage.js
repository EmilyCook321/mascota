import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
// import SubmitButton from "../components/SubmitButton";

function NumberQuestionPage(props) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    async function fetchQuestion() {
      const NumberQuestion = await getQuestion(props.pageNumber);
      setQuestion(NumberQuestion);
      console.log(NumberQuestion);
    }
    fetchQuestion();
    //below was an empty react hook  }[]);
  });

  // function checkAnswers() {
  //   alert("success");
  // }

  return (
    <Numbermain>
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
            {/* <SubmitButton onClick={checkAnswers} /> */}
          </>
        )}
      </div>
    </Numbermain>
  );
}
export default NumberQuestionPage;
NumberQuestionPage.propTypes = {
  pageNumber: PropTypes.number,
};

const Numbermain = styled.div`
  align-items: center;
  background: #9e38d5;
`;
