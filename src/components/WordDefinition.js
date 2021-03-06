import React from "react";
import { useNavigate } from "react-router-dom";
import { lettersOnly } from "../utils/help";

export default function WordDefinition({ word, title }) {
  const navigate = useNavigate();
  const handleWordClick = (e) => {
    const word = lettersOnly(e.target.innerText);
    navigate(`../${word}`);
  };
  // let wordClass;
  // if (word.partOfSpeech === "n") {
  //   wordClass = "noun";
  // }
  return (
    <div className={`${word.partOfSpeech} word-definition`}>
      {title ? <h3>{word.word}</h3> : null}
      {word.partOfSpeech !== "null" ? <h3>As a {word.partOfSpeech}</h3> : null}
      {word.definition.map((definition) => {
        return (
          <p key={definition}>
            {definition.split(" ").map((word, i) => (
              <span key={i} onClick={handleWordClick}>
                {word}{" "}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
