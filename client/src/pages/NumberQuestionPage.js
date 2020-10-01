import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import { useParams, useHistory } from "react-router-dom";
import OptionSelector from "../components/OptionSelector";
import Counter from "../components/Counter";
import Header from "../components/Header";
import styled from "@emotion/styled";
import SubmitButton from "../components/SubmitButton";

function NumberQuestionPage() {
  const history = useHistory();
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const { id } = useParams();
  const [showAnswer, setShowAnswer] = useState(false);
  const [incPoints, setIncPoints] = useState(0);

  useEffect(() => {
    async function fetchQuestion() {
      const question = await getQuestion(id);
      setQuestion(question);
      console.log(question);
    }
    fetchQuestion();
  }, [id]);

  // insert function for page change

  function handleClick() {
    console.log("handleClick");
    setShowAnswer(true);
    if (question.answer === selectedAnswer) {
      setIncPoints(incPoints + 1);
      history.push(`/questions/${Number(id) + 1}`);
    }
  }

  return (
    <div>
      <Header />
      <h1>Question {id}</h1>
      <questionstyling>
        <Counter number={incPoints} />
        <div></div>
        {question && (
          <div key={question.id}>
            <QuestionBubble question={question.question} />
            {question.options ? (
              <OptionSelector
                values={question.options}
                onSelect={(answer) => setSelectedAnswer(answer)}
              />
            ) : (
              <NumberSelector
                increment={() => setSelectedAnswer(selectedAnswer + 1)}
                decrement={() => setSelectedAnswer(selectedAnswer - 1)}
                number={selectedAnswer}
              />
            )}
            <SubmitButton onClick={handleClick} />

            {showAnswer && (
              // {nextPage && (
              <>
                {/* <div>Correct answer: {question.answer}</div> */}
                {question.answer === selectedAnswer && <h2>Gut gemacht!</h2>}
              </>
            )}
          </div>
        )}
      </questionstyling>
    </div>
  );
}

export default NumberQuestionPage;

const questionstyling = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: auto;
  height: 100%;
  margin: auto;
`;
