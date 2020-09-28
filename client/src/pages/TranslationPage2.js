import React, { useState, useEffect } from "react";
import OptionSelector from "../components/OptionSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function TranslationQuestionPage(props) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    async function fetchQuestion() {
      const TranslationQuestion = await getQuestion(props.pageNumber);
      setQuestion(TranslationQuestion);
      console.log(TranslationQuestion);
    }
    fetchQuestion();
    //below was an empty react hook  }[]);
  });

  return (
    <Translationmain>
      <div>
        <h1>Question 3</h1>
        {question && (
          <>
            <QuestionBubble question={question.question} key={question.id} />

            {question.options && (
              <OptionSelector
                values={question.options}
                onSelect={(answer) => setSelectedAnswer(answer)}
              />
            )}
            {question.answer === selectedAnswer && <h2>Richtig!</h2>}
          </>
        )}
      </div>
    </Translationmain>
  );
}
export default TranslationQuestionPage;
TranslationQuestionPage.propTypes = {
  pageNumber: PropTypes.number,
};

//Styling

const Translationmain = styled.div`
  align-items: center;
  background: #9e38d5;
`;
