import axios from 'axios';

// 심리검사 문항 요청 Url
const getQuestion = `www.career.go.kr/inspct/openapi/test/questions?apikey=7a4a751c986dd7f717a4bb2fb63a14a6&q=6`

// 심리검사 결과 요청 Url
const getTestResult = `www.career.go.kr/inspct/openapi/test/report?apikey=7a4a751c986dd7f717a4bb2fb63a14a6&qestrnSeq=6`

// 심리검사 문항 받기
let Question = []
axios.get(getQuestion)
    .then((res) => {
        Question.push(res.data.RESULT)
    })
    .catch(err => console.log(err))