import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const TestExPage = ({ history }) => {
  const [answer, setAnswer] = useState("");

  return (
    <div className="container">
      <div>
        <h1 id="h1">검사예시</h1>
      </div>

      <div>
        <div id="per">{answer === "1" || answer === "2" ? 100 : 0}%</div>
      </div>

      <div>
        <ProgressBar
          variant="progress-bar_color"
          animated
          now={answer === "1" || answer === "2" ? 100 : 0}
        />
      </div>

      <div id="q">
        직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.
        <br />
        가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
      </div>

      <div>
        <div>
          <label id="exlabel" htmlFor="answer1">
            <input
              type="radio"
              id="answer1"
              name="answer"
              value="1"
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
            />
            능력발휘
          </label>

          <label id="exlabel" htmlFor="answer2">
            <input
              type="radio"
              id="answer2"
              name="answer"
              value="2"
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
            />
            자율성
          </label>
        </div>
        <div id="btnbox">
          <div>
            <button
              id="btn"
              type="button"
              className="btn btn-primary shadow-none"
              onClick={() => history.push("/")}
            >
              이전
            </button>
          </div>

          <div>
            {answer === "1" || answer === "2" ? (
              <button
                id="btn"
                type="button"
                className="btn btn-primary shadow-none"
                onClick={(event) => {
                  history.push("/TestPage/0");
                }}
              >
                검사시작
              </button>
            ) : (
              <button
                id="btn"
                type="button"
                className="btn btn-primary disabled"
                disabled
              >
                검사시작
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestExPage;
