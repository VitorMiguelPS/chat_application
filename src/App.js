import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./assets/App.css";

const App = () => {
  if(!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine 
        height="100vh"
        projectID="55bb295a-dba7-4061-92f5-680bbe00bcb8"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;