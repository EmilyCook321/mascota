import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function HowToPlayBubble() {
  return (
    <>
      <Textarea>
        Answer 4 questions correctly to earn 4 hearts. Once you have 4 hearts,
        your Mascota will grow a little bit. The more you practise, the faster
        your Mascota will reach adulthood. If you dont practise, your Mascota
        will revert back to being a baby.{" "}
      </Textarea>
    </>
  );
}

HowToPlayBubble.propTypes = { question: PropTypes.string };

const Textarea = styled.textarea`
  text-align: center;
  top: 20px;

  background-color: #4e7fcd;
  outline: none;
  resize: none;

  font-size: 80%;
  color: #ffff;
  border-radius: 3px;
  width: 400px;
  height: 100px;
  border: none;
`;
