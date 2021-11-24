import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "./UserStore";

const ResultPage = ({ history }) => {
    const context = useContext(UserContext);
    const key = "7a4a751c986dd7f717a4bb2fb63a14a6";
    let seq = "";

    const [data, setData] = useState({});

    useEffect(() => {
        async function result() {
            async function getResult() {
                axios
                    .post (`https://www.career.go.kr/inspct/openapi/test/report?apikey=${key}&qestrnSeq=6`, context)
                    .then((res) => {
                        setData(res.data.RESULT);
                        seq = res.data.RESULT['url'].split("seq=")[1];
                        console.log("POST 요청 확인")
                        console.log(seq)
                        return seq
                    })
                    .catch(() => {
                        console.log("POST 요청 실패")
                    })
            }
            async function getData() {
                axios
                    .get (`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`)
            }
            await getResult();
            await getData();
        }
        result();
    }, []);


    useEffect(() => {
        console.log(data)
        console.log(context)
    }, [data, context])

    return (
        <div>
            <div>직업가치관검사 결과표</div>
        </div>
    )
}


export default ResultPage;