# Her Team Chatting App (Microsoft Team Clone)

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#reason">Purpose of the Project</a></li>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">Architecture & Functionality</a></li>
    <li><a href="#new">Lessons</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>

---

<div id="reason"/>

## Purpose of the project

- React Hooks Practice
- Authentication Practice
-

<!--USE TECH-->

## Used tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-critical?style=flat-square&logo=React Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactHooks-critical?style=flat-square&logo=React Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-yellow?style=flat-square&logo=firebase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-orange?style=flat-square&logoColor=white"/>

</span>

### Dependancy

npm install @ant-design/icon axios react-chat-engine

---

<!-- ABOUT THE PROJECT -->

## About The Project

[Demo link](teambuild-chatting.netlify.app)

### Landing Page

---

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945507-c02ed900-60a8-11eb-96ee-6bb7a82a391b.png">

<img width="45%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945524-c755e700-60a8-11eb-9853-fe0d2ab439e8.png">
</div>

<div>
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945519-c58c2380-60a8-11eb-871d-4dfc189d4198.png">
<img width="45%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945799-4e0ac400-60a9-11eb-987c-ef00cf142905.gif">
</div>

### Functionality Pages

---

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/105945952-9f1ab800-60a9-11eb-80e2-4324282ea38b.png">
<img width="46%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945809-5400a500-60a9-11eb-96f3-7c2363c35aad.gif">
</div>

- font color, background color, name 등등 여러 input을 입력받아 firebase realtime에 올리는 파트.
- edit (왼쪽 컨테이너): 변경되는 사항이 있을때마다 firebase에 데이터를 씀
- view (오른쪽 컨테이너): firebase.read.on을 이용해서 firebase에서 변경되는 사항이 있을때마다 업데이트

---

## Architecture

paper-kit-react
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
├── Components
│  ├── ChatFeed.jsx
│  ├── MessageForm.jsx
│  ├── MyMessage.jsx
│  └── TheirMessage.jsx
│ 
├── App.js
├── index.js
│ 
│ 
│ 
│ 
│

### Structure

<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105948977-49e1a500-60af-11eb-8249-133fc1b50e0e.png">

---

### Features

<img width="1680" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105949828-b4dfab80-60b0-11eb-971d-d4644c5701db.png">

1. fire base auth
2. auth 되었을때만 eidt 가능
3. firebase.read.on을 이용해서 firebase데이터가 변경될때마다 app의 state.data 업데이트

---

<div id="new"/>

## Lessons

- useEffect 학습
- React router 학습
- firebase auth, realtimeDataBase 사용법 학습
- cloudinary
- **Mistake** when creating input box, if onChange function is not properly stated insid the input Element, it doesnt receive any input letters!

---

## Reference

Reference Link : </br>
[firebase](https://firebase.google.com/docs/database/web/read-and-write) </br>
[cloudinary doc](https://cloudinary.com/documentation/react_image_and_video_upload) </br>
[create react](https://create-react-app.dev)</br>
[dream coding ellie](https://academy.dream-coding.com)</br>
[typing effect](https://www.youtube.com/watch?v=T4VE_6v9hFs&t=450s)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

# team-chatting-room
