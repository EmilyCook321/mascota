import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";

import { useParams } from "react-router-dom";
import OptionSelector from "../components/OptionSelector";
import Counter from "../components/Counter";

function NumberQuestionPage() {
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

  return (
    <div>
      <h1>Question {id}</h1>
      <questionstyling>
        <Counter number={incPoints} />

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
            <button
              onClick={() => {
                setShowAnswer(true);
                if (question.answer === selectedAnswer) {
                  setIncPoints(incPoints + 1);
                }
              }}
            >
              Submit
            </button>

            {/* <output>Points {incPoints}</output> */}

            {showAnswer && (
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
