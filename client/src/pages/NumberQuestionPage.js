import React, { useState, useEffect } from "react";
import NumberSelector from "../components/NumberSelector";
import { getQuestion } from "../api/getQuestion";
import QuestionBubble from "../components/QuestionBubble";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import OptionSelector from "../components/OptionSelector";

// import SubmitButton from "../components/SubmitButton";

function NumberQuestionPage() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const { id } = useParams();
  const [showAnswer, setShowAnswer] = useState(false);

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
  align-items: center;
  background: #9e38d5;
`;
