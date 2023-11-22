/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSynonymsAPI } from "./hooks";

const SynonymFinder = () => {
  const [word, setWord] = useState("");
  const [term, setTerm] = useState("");

  const { data } = useSynonymsAPI(word);

  const subbmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setWord(term);
  };

  const pickAWord = (string: string) => {
    setTerm(string);
    setWord(string);
  };

  return (
    <div>
      <form className="form" onSubmit={subbmitForm}>
        <label style={{ margin: "10px" }} htmlFor="word-input">
          Your Word
        </label>
        <input
          onChange={(e) => setTerm(e.target.value)}
          style={{ margin: "10px" }}
          id="word-input"
          type="text"
          value={term}
        />
        <button style={{ margin: "10px" }}>Submit</button>
      </form>

      <ul style={{ listStyleType: "none" }}>
        {data?.map((word: any) => (
          <li
            key={word.word}
            style={{ cursor: "pointer" }}
            onClick={(e: any) => pickAWord(e.target.innerText)}
          >
            {word.word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SynonymFinder;
