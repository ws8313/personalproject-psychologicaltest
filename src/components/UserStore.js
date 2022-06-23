import React, { createContext } from "react";

// 11.21 context 만들기
export const UserContext = createContext();

const UserStore = (props) => {
  const user = {
    apikey: "7a4a751c986dd7f717a4bb2fb63a14a6",
    qestrnSeq: "6",
    trgetSe: "100209",
    name: "",
    gender: "",
    startDtm: new Date().getTime(),
    answers: "",
  };
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
