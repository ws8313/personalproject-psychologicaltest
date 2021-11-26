import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"
import { UserContext } from "./UserStore";

const ResultPage = ({ history }) => {
    const context = useContext(UserContext);
    const key = "7a4a751c986dd7f717a4bb2fb63a14a6";

    const [data, setData] = useState({});
    const [resultData, setResultData] = useState({});
    const [jobData, setJobData] = useState([]);
    const [majorData, setMajorData] = useState([]);
    const [getScoreValue, setGetScoreValue] = useState([]);


    useEffect(() => {
        async function result() {
            let seq = "";
            const getResult = await axios
                    .post (`http://www.career.go.kr/inspct/openapi/test/report?apikey=${context.apikey}&qestrnSeq=${context.qestrnSeq}`, context)
                    .then((res) => {
                        setData(res.data.RESULT);
                        seq = res.data.RESULT["url"].split("seq=")[1];
                        console.log("POST 요청 확인")
                        console.log(seq)
                        return seq;
                    })
                    .catch(() => {
                        console.log("POST 요청 실패")
                    })
            let no1 = "";
            let no2 = "";
            const getData = await axios
                    .get (`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`)
                    .then ((res) => {
                        setResultData(res.data)
                        const wonScore = res.data.result.wonScore.split(" ")
                        wonScore.pop(1)
                        console.log(wonScore)
                        const scorevalue = [];
                        let sortvalue = [];
                        for (let i = 0; i < wonScore.length; i++) {
                            scorevalue.push(wonScore[i].split("=")[1])
                        }
                        setGetScoreValue(scorevalue)
                        console.log(scorevalue)
                        sortvalue = wonScore.sort(function (a, b) {
                            return a[2] - b[2];
                        })
                        console.log(sortvalue)


                        // 배열[-1] 자바스크립트에선 x
                        no1 = sortvalue[sortvalue.length - 1][0];
                        no2 = sortvalue[sortvalue.length - 2][0];
                        console.log(no1, no2)
                    })
                    .catch ((err) => {
                        console.log(err)
                    })
            const getJobs = await axios
                    .get (`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${no1}&no2=${no2}`)
                    .then((res) => {
                        setJobData(res.data)
                        console.log("직종 get 완료", res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            const getMajor = await axios
                    .get (`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${no1}&no2=${no2}`)
                    .then((res) => {
                        setMajorData(res.data)
                        console.log("학과 get 완료", res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            result();
    }, []);

    useEffect(() => {
        console.log(data)
        console.log(context)
        console.log(resultData)
        console.log(jobData)
        console.log(majorData)
        console.log(getScoreValue)
    }, [data, context, resultData, jobData, majorData, getScoreValue])

    function getJobData() {
        let high = [];
        let college = [];
        let univ = [];
        let grad = [];
        for (let i = 0; i <= jobData.length - 1; i++) {
            if (jobData[i][2] <= 2) {
                high.push(jobData[i][1])
            } else if (jobData[i][2] === 3) {
                college.push(jobData[i][1])
            } else if (jobData[i][2] === 4) {
                univ.push(jobData[i][1])
            } else if (jobData[i][2] === 5) {
                grad.push(jobData[i][1])
            }
        }
        high = high.join(", ")
        college = college.join(", ")
        univ = univ.join(", ")
        grad = grad.join(", ")

        return (
            <div>
                <div>
                    <h4>종사자 평균 학력별</h4>
                </div>
                <table>
                    <tr>
                        <th>분야</th>
                        <th>직업</th>
                    </tr>
                    <tr>
                        <td>고졸</td>
                        <td>{high}</td>
                    </tr>
                    <tr>
                        <td>전문대졸</td>
                        <td>{college}</td>
                    </tr>
                    <tr>
                        <td>대졸</td>
                        <td>{univ}</td>
                    </tr>
                    <tr>
                        <td>대학원졸</td>
                        <td>{grad}</td>
                    </tr>
                </table>
            </div>
        )
    }

    function getMajorData() {
        let major1 = [];
        let major2 = [];
        let major3 = [];
        let major4 = [];
        let major5 = [];
        let major6 = [];
        let major7 = [];
        let major8 = [];
        for (let i = 0; i <= majorData.length - 1; i++) {
            if (majorData[i][2] === 0) {
                major1.push(majorData[i][1])
            } else if (majorData[i][2] === 1) {
                major2.push(majorData[i][1])
            } else if (majorData[i][2] === 2) {
                major3.push(majorData[i][1])
            } else if (majorData[i][2] === 3) {
                major4.push(majorData[i][1])
            } else if (majorData[i][2] === 4) {
                major5.push(majorData[i][1])
            } else if (majorData[i][2] === 5) {
                major6.push(majorData[i][1])
            } else if (majorData[i][2] === 6) {
                major7.push(majorData[i][1])
            } else if (majorData[i][2] === 7) {
                major8.push(majorData[i][1])
            }
        }
        major1 = major1.join(", ")
        major2 = major2.join(", ")
        major3 = major3.join(", ")
        major4 = major4.join(", ")
        major5 = major5.join(", ")
        major6 = major6.join(", ")
        major7 = major7.join(", ")
        major8 = major8.join(", ")

        return (
            <div>
                <div>
                    <h4>종사자 평균 전공별</h4>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>분야</th>
                            <th>직업</th>
                        </tr>
                        <tr>
                            <td>계열무관</td>
                            <td>{major1}</td>
                        </tr>
                        <tr>
                            <td>인문</td>
                            <td>{major2}</td>
                        </tr>
                        <tr>
                            <td>사회</td>
                            <td>{major3}</td>
                        </tr>
                        <tr>
                            <td>교육</td>
                            <td>{major4}</td>
                        </tr>
                        <tr>
                            <td>공학</td>
                            <td>{major5}</td>
                        </tr>
                        <tr>
                            <td>자연</td>
                            <td>{major6}</td>
                        </tr>
                        <tr>
                            <td>의학</td>
                            <td>{major7}</td>
                        </tr>
                        <tr>
                            <td>예체능</td>
                            <td>{major8}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }


    let barChart;
    useEffect(() => {
        let ctx = document.getElementById("barChart").getContext("2d");
        console.log(getScoreValue)
            barChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["능력발휘", "자율성", "보수", "안정성", "사회적 인정", "사회봉사", "자기계발", "창의성"],
                    datasets: [{
                        label: "직업가치관 결과",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)",
                        data: getScoreValue,
                    }
                ]
            }
        })
        if (Array.isArray(getScoreValue) && getScoreValue.length === 0)barChart.destroy();
    }, [getScoreValue]); 


    return (
        <div>
            <div>
                <h2>직업가치관검사 결과표</h2>
            </div>

            <div>
                직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과
                신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의
                역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때
                상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이
                가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼
                기회를 제공합니다.
            </div>

            {/* 검사일 확인 */}
            { resultData && Object.keys(resultData).length > 0 ?
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">이름</th>
                            <th scope="col">성별</th>
                            <th scope="col">검사일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{context.name}</td>
                            <td>{context.gender === "100323" ? "남성" : "여성"}</td>
                            <td>{resultData.result["endDtm"].slice(0,10)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            : undefined }

            <div>
                <h3>직업가치관결과</h3>
            </div>

            <div>
                <canvas id="barChart"></canvas>
            </div>

            <div>
                <h3>가치관과 관련이 높은 직업</h3>
                <div>
                    {getJobData()}
                </div>
                <div>
                    {getMajorData()}
                </div>
            </div>

            <div>
                <button onClick={() => {
                    history.push("/")
                }}>다시검사하기</button>
            </div>
        </div>
    )
}


export default ResultPage;