import { React, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

function Ques({ title, options, correct, total, setTotal }) {
  const uid = uuid();
  const s = (h) => {
    setD(h.split(uid)[1] === correct ? "✔ Correct" : "❌ Wrong");
    if (score <= 0) return setTotal(total);
    if (h.split(uid)[1] === correct) return setTotal(total + score);
    console.log("h");
    setScore(score - 500 / options.split("/./").length);
  };
  const [d, setD] = useState();
  const [score, setScore] = useState(500);
  return (
    <Question>
      <h2>{title}</h2>
      <Buttons>
        {options.split("/./").map((a, p) => (
          <button
            onClick={() => s(uid + (p + 1))}
            id={uid + p}
            key={uuid()}
            disabled={d === "✔ Correct"}
          >
            {a}
          </button>
        ))}
      </Buttons>
      <p>{d}</p>
    </Question>
  );
}

const Question = styled.div`
  color: floralwhite;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: xx-large;
    font-family: "Source Code Pro", monospace;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    all: unset;
    width: 300px;
    height: 150px;
    background-color: #32d632;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    &:disabled {
      background-color: #1d271d;
      cursor: not-allowed;
    }
  }
`;

export default Ques;
