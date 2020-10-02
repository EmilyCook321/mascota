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
import HatchingChick from "../assets/icons/hatchingchick.svg";

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

  if (incPoints === 4) {
    setTimeout(() => {
      history.push(`/congratulations/`);
    }, 1000);
  }

  function handleClick() {
    setShowAnswer(true);
    if (question.answer === selectedAnswer) {
      setIncPoints(incPoints + 1);
      history.push(`/questions/${Number(id) + 1}`);
      setSelectedAnswer(0);
    }
  }

  return (
    <div>
      <Header />
      <Main>
        <questionstyling>
          <QuestionNumber>
            <h1>Question {id}</h1>
          </QuestionNumber>

          <Counter number={incPoints} />

          {question && (
            <QuestionContainer key={question.id}>
              <img src={HatchingChick} alt="Hatching Chick Icon" />

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
              <SubmitButton
                onClick={handleClick}
                text="Bestätigen"
              ></SubmitButton>

              {showAnswer && (
                // {nextPage && (
                <>
                  {/* <div>Correct answer: {question.answer}</div> */}
                  {question.answer === selectedAnswer && <h2>Gut gemacht!</h2>}
                </>
              )}
            </QuestionContainer>
          )}
        </questionstyling>
      </Main>
    </div>
  );
}

export default NumberQuestionPage;

const questionstyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: 100%;
  margin: auto;
`;

const QuestionNumber = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 20%;
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  /* width: auto;
  height: 100%; */
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// const Chicken = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
//   width: 50px;
//   height: 50px;
// `;
