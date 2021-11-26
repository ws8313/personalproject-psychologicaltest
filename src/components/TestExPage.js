import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";


const TestExPage = ({ history }) => {
    const [answer, setAnswer] = useState('');

    return (
        <div>
            
            <div>
                <div>검사예시</div>
            </div>

            <div>
                <div>0%</div>
            </div>

            <div>
                <ProgressBar animated now={50} />
            </div>

            <div>
                직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.
                <br/>
                가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </div>

            <form>
                <div>
                    <label for="answer1">
                    <input
                        type="radio"
                        id="answer1"
                        name="answer"
                        value="1"
                        onChange={
                            (event) => {
                                setAnswer(event.target.value);
                            }
                        }
                    /> 능력발휘
                    </label>

                    <label for="answer2">
                    <input
                        type="radio"
                        id="answer2"
                        name="answer"
                        value="2"
                        onChange={
                            (event) => {
                                setAnswer(event.target.value);
                            }
                        }
                    /> 자율성
                    </label>
                </div>

                <div>
                    <button onClick={() => history.goBack()}>이전</button>
                </div>

                <div>
                    {
                        (answer === '1') || (answer === '2') ?
                        <button type="submit" onClick={ (event) => { history.push("/TestPage/0") }}>검사시작</button>
                        :
                        <button type="submit" disabled>검사시작</button>
                    }
                </div>
            </form>
        </div>

        
    )
}

export default TestExPage;
