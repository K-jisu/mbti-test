# 🎉 MBTI Test

![image](https://github.com/user-attachments/assets/9e6fdbf3-acab-4ab2-8753-6ec6eee3cc9e)

# 🔖 프로젝트 개요

json-server, HTTP Protocol, axios, tanstack query, zustand, tailwind css를 익히기 위한 프로젝트

# 🔨 기술 스택

- React.js
- React-Router-Dom
- HTTP protocol
- axios
- tanstackQuery
- zustand
- tailwind

# ✅ 구현 사항

- [x] react-router-dom을 이용하여 페이지간 이동을 구현.
- [x] ProtectRoute를 구현하고 Outlet을 사용하여 로그인, 비로그인 구분
- [x] jwt 토큰을 활용하여 api 통신
- [x] json-server 셋업 및 API 연결
- [x] json-server를 이용한 CRUD API 작성
- [x] 테스트 결과 리스트 구성
- [x] axios를 사용
- [x] Tanstack Query 사용
- [x] zustand 사용
- [ ] 반응형 구현하기
- [ ] 공유하기 구현하기

# 🚨 트러블 슈팅

- [새로고침시 로그인 상태 확인 로직을 어떻게 해야하나?](https://velog.io/@wltn7star/%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%8B%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C-%ED%99%95%EC%9D%B8-%EB%A1%9C%EC%A7%81%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC%ED%95%98%EB%82%98)
- [json-server에서 사용자 닉네임 업데이트 하는데... 안되네?](https://velog.io/@wltn7star/json-server%EC%97%90%EC%84%9C-patch%EB%A1%9C-id%EA%B0%92%EC%97%90-%ED%95%B4%EB%8B%B9%ED%95%98%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95%EC%9D%B4..-%EC%95%88%EB%90%98%EB%84%A4)

# 📸 스크린 샷

<details>
  <summary>홈 화면</summary>
  
![image](https://github.com/user-attachments/assets/9b0801c5-985e-447b-a666-377a5924e211)

</details>
<details>
  <summary>로그인, 회원가입</summary>

![image](https://github.com/user-attachments/assets/8f292a51-2526-41be-ab73-c39fc690bee9)

![image](https://github.com/user-attachments/assets/91c26c80-3744-4c6a-af32-193ea0cebd0a)


</details>
<details>
  <summary>프로필 수정</summary>

![image](https://github.com/user-attachments/assets/cc3dfd1b-22e8-41ab-a7b3-48ff67e5dd0a)


</details>

<details>
  <summary>테스트 페이지</summary>

![image](https://github.com/user-attachments/assets/294500ca-ef5e-461f-8b1d-285abd014cae)

</details>

<details>
  <summary>테스트 결과 페이지</summary>

![image](https://github.com/user-attachments/assets/8dcccb10-d229-4ef5-824c-6e464414d2fa)


</details>

# 📦 프로젝트 구조

```
📦mbti-test
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┗ 📜testResults.js
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Common
 ┃ ┃ ┃ ┣ 📜CommonBtn.jsx
 ┃ ┃ ┃ ┣ 📜CommonContainer.jsx
 ┃ ┃ ┃ ┣ 📜CommonForm.jsx
 ┃ ┃ ┃ ┗ 📜CommonInput.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜AuthHeader.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜NotAuthHeader.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜HomeCard.jsx
 ┃ ┃ ┣ 📂Results
 ┃ ┃ ┃ ┣ 📜ResultItem.jsx
 ┃ ┃ ┃ ┗ 📜ResultList.jsx
 ┃ ┃ ┣ 📂Routes
 ┃ ┃ ┃ ┗ 📜ProtectedRoute.jsx
 ┃ ┃ ┗ 📂Test
 ┃ ┃ ┃ ┗ 📜TestForm.jsx
 ┃ ┣ 📂constant
 ┃ ┃ ┣ 📜HeaderConstant.js
 ┃ ┃ ┗ 📜HomeConstant.js
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜questions.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useTestResults.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┣ 📜Results.jsx
 ┃ ┃ ┣ 📜Signup.jsx
 ┃ ┃ ┗ 📜Test.jsx
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Routes.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜mbtiCalculator.js
 ┃ ┣ 📂zustand
 ┃ ┃ ┗ 📜userStorage.js
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜db.json
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┗ 📜vite.config.js
```
