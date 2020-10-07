import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function NewWordBubbleOverview() {
  return (
    <>
      <Textarea>
        Kuchen laufen Walnuss Gehirn glücklich schnell Freunde
      </Textarea>
    </>
  );
}

NewWordBubbleOverview.propTypes = { question: PropTypes.string };

const Textarea = styled.textarea`
  top: 20px;
  background-color: #4e7fcd;
  outline: none;
  resize: none;
  text-align: center;
  font-size: 100%;
  color: #ffff;
  border-radius: 3px;
  width: 400px;
  height: 100px;
`;