import React, { useState } from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GithubUserLookUp from "./components/GithubUserLookUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
function App() {
  // Nav Bar component
  const [count, setCount] = useState([1]);
  const addComponent = () => setCount([...count, 1]);
  let lookups = count.map((el, i) => <GithubUserLookUp key={i} />);
  return (
    <>
      <div className="flex flex-col">
        {lookups}
        <div className="mx-auto">
          <button
            onClick={addComponent}
            css={css`
              &:hover {
                border: 1px solid #667eea;
              }
            `}
            className="badge hover:border hover:bg-white hover:text-indigo-600"
          >
            <FontAwesomeIcon icon={faGithubAlt} /> New Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
