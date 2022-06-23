import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserStore";

// 사용자 정보 받아오기 및 경고창으로 확인
const UserPage = ({ history }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const context = useContext(UserContext);
  localStorage.clear();

  useEffect(() => {
    context.name = name;
    context.gender = gender;
  }, [name, gender]);

  return (
    <div className="container">
      <div id="inputform">
        <h1 id="h1">직업가치관검사</h1>

        {/* 사용자 이름, 성별 입력 form  */}
        {/* 11.21 수정 내용 이름 input 자동완성기능 off */}
        <form>
          <div>
            <p id="p">이름</p>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              autoComplete="off"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <p id="p">성별</p>
            <label id="userlabel" htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value="100323"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              남자
            </label>
            <label id="userlabel" htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="100324"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              여자
            </label>
          </div>

          {/* 이름, 성별 둘 중 하나라도 입력하지 않으면 버튼 비활성화 */}
          <div id="button">
            {name.length === 0 || gender.length === 0 ? (
              <button
                id="userbtn"
                type="submit"
                className="btn btn-primary disabled"
                disabled
              >
                검사시작
              </button>
            ) : (
              <button
                id="userbtn"
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  history.push("/TestExPage");
                }}
              >
                검사시작
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
