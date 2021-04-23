import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () => {
  return (
    <ChatEngine
        height = "100vh"
        projectID = "0f657460-d2c5-42b1-9537-7bb23c530933"
        userName = "her"
        userSecret="123123"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;