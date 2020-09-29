import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import OptionSelector from "../components/OptionSelector";
import Counter from "../components/Counter";

function NumberQuestionPage() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const { id } = useParams();
  const [showAnswer, setShowAnswer] = useState(false);
  const [incPoints, setIncPoints] = useState(null);

  useEffect(() => {
    async function fetchQuestion() {
      const question = await getQuestion(id);
      setQuestion(question);
      console.log(question);
    }
    fetchQuestion();
  }, [id]);

  return (
    <Numbermain>
      <div>
        <h1>Question {id}</h1>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
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
            <button onClick={() => setShowAnswer(true)}>Submit</button>

            <Counter
              increment={() => setIncPoints(setIncPoints + 1)}
              number={incPoints}
            />
            <output onClick={() => setShowAnswer(true)}>
              Points{incPoints}{" "}
            </output>

            {showAnswer && (
              <>
                <div>Correct answer: {question.answer}</div>
                {question.answer === selectedAnswer && <h2>Gut gemacht!</h2>}
              </>
            )}
          </div>
        )}
      </div>
    </Numbermain>
  );
}

export default NumberQuestionPage;

//Styling

const Numbermain = styled.div`
  justify-content: center;
  background: #9e38d5;
`;
