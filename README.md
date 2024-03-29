# 직업심리검사

## 설명

- 커리어넷에서 제공하는 직업심리검사 API를 사용하여 사용자의 직업 적합도를 확인할 수 있는 웹 서비스입니다.

## 배포 링크

[배포 링크](https://psycho-logical-test.netlify.app)

## 설치 및 실행 방법

1. 이 레포지토리를 클론합니다.

```bash
# 레포지토리 클론
git clone https://github.com/ws8313/personalproject-psychologicaltest.git
```

2. 클론한 폴더로 이동하여 npm 패키지를 설치합니다.

```bash
# 클론한 폴더로 이동
cd personalproject-psychologicaltest

# 패키지 설치
npm install
```

3. 어플리케이션을 실행합니다.

```bash
# 어플리케이션 실행
npm start
```

4. 브라우저에서 http://localhost:3000 으로 접속합니다.

## 사용 방법

1. 어플리케이션에 접속합니다.
2. 이름을 작성하고, 성별을 선택한 뒤 검사를 시작합니다.
3. 문항을 읽고 알맞은 답변을 선택하면서 검사를 진행합니다.
4. 선택한 답변에 따라서 결과가 나옵니다.
5. 다시 검사하기를 원한다면 "다시검사하기" 버튼을 클릭하여 검사를 진행합니다.

## 기능

- 정보 입력

  - 이름 입력
  - 성별 입력

- 직업 가치관 검사

  - 예시 페이지에서 검사 설명
  - 문항, 답변 보여주기
  - 검사 진행률 보여주기
  - 다음 페이지로 넘어갈 때 가장 위로 스크롤 이동
  - 검사 완료 페이지

- 검사 결과 페이지
  - 직업 가치관 설명 보여주기
  - 이름, 성별, 검사일 표시
  - 결과 차트로 보여주기
  - 학력별, 전공별로 가치관과 관련이 높은 직업 보여주기
  - "다시검사하기" 버튼 클릭 시 가장 첫 단계인 정보 입력 단계로 돌아가기

## 개발환경

- React
- Axios
- react-router-dom
- Bootstrap
- Chart.js

## 수상

<img src="https://user-images.githubusercontent.com/87023889/227697084-ee442e0d-f2d2-4d48-afc8-a93666497cf7.png"  width="400" height="600">
