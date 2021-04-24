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
- Authentication & Login Practice Practice
- Creating Realtime Chatting App using Chategine.io

<!--USE TECH-->

## Used tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-32b7f0?&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactHooks-e1a9f5?&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-yellow?style=flat-square&logo=firebase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-orange?style=flat-square&logoColor=white"/>

</span>

### Dependancy

```
npm install @ant-design/icon axios react-chat-engine
```
---

<!-- ABOUT THE PROJECT -->

## About The Project

[Demo link](teambuild-chatting.netlify.app)

### Landing Page

---

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/49248131/115940260-b32a4780-a455-11eb-9d45-cc0897ba6539.png">
<img width="45%" alt="img" src="https://github.com/Rosa-Kang/team-chatting-room/files/6368641/1.pptx">  
</div>

<div>
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/49248131/115940317-e967c700-a455-11eb-934b-8ab44769740f.png">
<img width="45%" alt="gif" src="https://user-images.githubusercontent.com/49248131/115940584-f933db00-a456-11eb-9235-c520c41d6127.mp4">
</div>

---
## Architecture

```
team-build-messanger
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
├── Components
│  ├── ChatFeed.jsx
│  ├── LoginForm.jsx
│  ├── MessageForm.jsx
│  ├── MyMessage.jsx
│  └── TheirMessage.jsx
│ 
├── App.js
└── index.js
```

1. LoginForm receives and execute the event Handling Function based user information from Landing Page.
2. Once the Use loggen-in, the chatting room is visible and also the user can create a new chatting room to invite people

---

<div id="new"/>

## Lessons

- useState
- Authentification using LocalStorage
- **Mistake** when creating input box, if onChange function is not properly stated insid the input Element, it doesnt receive any input letters!

---

# team-chatting-room
