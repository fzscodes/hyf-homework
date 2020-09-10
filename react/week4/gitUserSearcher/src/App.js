import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import UserContext from "./UserContext";

function App() {
  const [user, setUserName] = useState("");
  return (
    <div className="page-content">
      <h1>Github User Searcher</h1>
      <UserContext.Provider value={user}>
        <UserInput setUserName={setUserName} />
        <UserList />
      </UserContext.Provider>
    </div>
  );
}
export default App;
