import { ChatEngine } from "react-chat-engine";

import "./assets/App.css";

const App = () => {
  return (
    <ChatEngine 
        height="100vh"
        projectID="55bb295a-dba7-4061-92f5-680bbe00bcb8"
        userName="vitormiguelmaster"
        userSecret="123456"
    />
  );
}

export default App;