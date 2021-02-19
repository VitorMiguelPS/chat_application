import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./assets/App.css";

const App = () => {
  const { REACT_APP_PROJECT_ID } = process.env;
  if(!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine 
        height="100vh"
        projectID={REACT_APP_PROJECT_ID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;