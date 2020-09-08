import React, { useState, useEffect } from "react";
import UserContext from "../UserContext";

export default function UserList() {
  const userName = React.useContext(UserContext);

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (!userName) return;

    fetch(`https://api.github.com/search/users?q=${userName}`)
      .then((res) => res.json())
      .then((data) => setUserList(data.items))
      .catch((err) => console.log("api error: " + err));
  }, [userName]);
  if (!userList) return "API error";
  return userList.map((user) => (
    <p className="userlist">
      <a href={user.login}>
        {user.login}
        <br />
        <img className="user_img" src={user.avatar_url} alt={`${user.login}`} />
      </a>
    </p>
  ));
}
