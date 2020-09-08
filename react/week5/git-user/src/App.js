import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import UserContext from "./UserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";
import GithubUser from "./components/GithubUser";

function App() {
  const [user, setUserName] = useState("");
  return (
    <div>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Menu />
          <br />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/">
              <UserInput setUserName={setUserName} />
              <UserList />
            </Route>
            <Route exact path="/:username" component={GithubUser} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
export default App;
