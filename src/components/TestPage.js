import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserStore";
import axios from "axios";


const TestPage = ({ history }) => {
    const [questions, setQuestions] = useState([]);
    const [curPage, setCurPage] = useState(0);
    const [input, setInput] = useState([]);

    // context 사용
    const context = useContext(UserContext);
    
    // api 인증키
    const key = "7a4a751c986dd7f717a4bb2fb63a14a6";


    // 다음 버튼 클릭 함수 구현 필요
    const nextClick = (e) => {
        if(curPage === 5) {
            history.push("/ResultPage")
        } else if (curPage === 0) {
            history.push(""+(curPage+1))
            setCurPage(curPage + 1)
        }  else if (curPage < 6) {
            history.push(""+(curPage+1))
            setCurPage(curPage + 1)
        }
    }


    // 이전 버튼 클릭 함수
    const prevClick = (e) => {
        if(curPage === 0) {
            history.goBack()
        } else {
            setCurPage(curPage - 1)
        }
    }

    // 문항 가져오기
    useEffect(() => {
        async function getQuestion() {
            try {
                const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=6`)
                setQuestions(response.data['RESULT']);
                console.log(questions)
            } catch (err) {
                console.log(err)
            }
        }
        getQuestion();
    }, [])

    // 입력 값에 따라 버튼 비활성화
    const btnDisabled = () => {
        const btnShow = [];
        if(qlist && qlist.length > 0) {
            btnShow.push(
            ((curPage+1)*5) <= ((Object.keys(input).length)-1) || ((Object.keys(input).length)-1) === 28 ?
                <button onClick={nextClick}>다음</button> :
                <button onClick={nextClick} disabled>다음</button>
            )}
        return btnShow;
    }
    
    // qlist에 5문항씩 받아오기 및 배열 안에 객체 콘솔 출력에 TypeError: Cannot read property ‘0’ of undefined 에러 해결
    const qlist = [];
    for (let i=0; i<questions.length; i+=5) qlist.push(questions.slice(i, i+5));
    if(qlist && qlist.length > 0){ 
        console.log(qlist)
    }



    // 검사 문항 체크시 값 변경 함수
    const changeHandler = ((e) => {
        const { name, value } = e.target;
        
    
        // radio type의 input checked 기능 사용하기 위해 localStorage 사용
        localStorage.setItem(name, value)


        const inputList = [...input]
        for (let i = 0; i <= localStorage.length; i++) {
            inputList[i] = localStorage.getItem(i);
            setInput(inputList);
        }
        })

    useEffect(() => {
        const ansList = [];
        for (let i = 1; i <= input.length - 1; i++) {
            ansList.push("B" + String(i) + "=" + input[i]);
        }
        const ansListResult = ansList.join(" ");
        context.answers = ansListResult;
        console.log(context)
    }, [input])

    // checked 버튼 disable 구현 중 확인 필요
    if(qlist && qlist.length > 0) {
        console.log((curPage+1)*5)
        console.log((Object.keys(input).length)-1)
    }

    // questions 질문지 받아오기 콘솔 출력
    if(questions && questions.length > 0){
        console.log(questions)
    }

    // 화면에 문항 출력
    const printqlist = () => {
        const print5qlist = [];
            if(curPage === 5) {
                for (let curQuestions=0; curQuestions<3; curQuestions++) {
                        print5qlist.push(
                            <div key={qlist[curPage][curQuestions].qitemNo}>
                                <div>
                                    {qlist[curPage][curQuestions].question}
                                </div>

                                <form>
                                    <input 
                                        type="radio" 
                                        id="check"
                                        name={qlist[curPage][curQuestions].qitemNo} 
                                        value={qlist[curPage][curQuestions].answerScore01} 
                                        onChange={changeHandler}
                                        checked={localStorage.getItem(qlist[curPage][curQuestions].qitemNo) === qlist[curPage][curQuestions].answerScore01 ? true : false}  
                                    />
                                    <div>{qlist[curPage][curQuestions].answer03}</div>
                                    <div>{qlist[curPage][curQuestions].answer01}</div>

                                    <input 
                                        type="radio" 
                                        id="check"
                                        name={qlist[curPage][curQuestions].qitemNo} 
                                        value={qlist[curPage][curQuestions].answerScore02} 
                                        onChange={changeHandler}
                                        checked={localStorage.getItem(qlist[curPage][curQuestions].qitemNo) === qlist[curPage][curQuestions].answerScore02 ? true : false}
                                    />
                                    <div>{qlist[curPage][curQuestions].answer04}</div>
                                    <div>{qlist[curPage][curQuestions].answer02}</div>
                                </form>
                            </div>
                        )}
        } else if (curPage < 6) {
            for (let curQuestions=0; curQuestions<5; curQuestions++) {
                if(qlist && qlist.length > 0) {
                    print5qlist.push(
                        <div key={qlist[curPage][curQuestions].qitemNo}>
                            <div>
                                {qlist[curPage][curQuestions].question}
                            </div>

                            <form>
                                <input 
                                    type="radio" 
                                    id="check"
                                    name={qlist[curPage][curQuestions].qitemNo} 
                                    value={qlist[curPage][curQuestions].answerScore01} 
                                    onChange={changeHandler}
                                    checked={localStorage.getItem(qlist[curPage][curQuestions].qitemNo) === qlist[curPage][curQuestions].answerScore01 ? true : false}
                                />
                                <div>{qlist[curPage][curQuestions].answer03}</div>
                                <div>{qlist[curPage][curQuestions].answer01}</div>

                                <input 
                                    type="radio" 
                                    id="check"
                                    name={qlist[curPage][curQuestions].qitemNo}  
                                    value={qlist[curPage][curQuestions].answerScore02} 
                                    onChange={changeHandler}
                                    checked={localStorage.getItem(qlist[curPage][curQuestions].qitemNo) === qlist[curPage][curQuestions].answerScore02 ? true : false}
                                />
                                <div>{qlist[curPage][curQuestions].answer04}</div>
                                <div>{qlist[curPage][curQuestions].answer02}</div>
                            </form>
                        </div>
                )
            } 
                // 검사 응답 모두 완료시 버튼 '결과보기' 변경 및 결과 페이지 이동 구현
            
    }}
        return print5qlist;
        
    }

    return (
        <div>
            <div>
                {printqlist()}
            </div>

            <div>
                <button onClick={prevClick}>이전</button>
            </div>
            <div>
                {btnDisabled()}
            </div>
        </div>
    )
}

export default TestPage;