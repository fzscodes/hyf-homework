import React, { useState } from "react";

export default function UserInput({ setUserName }) {
  const [User, setUser] = useState("");

  const updateUser = (e) => {
    setUser(e.target.value);
    setUserName(e.target.value);
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={User}
          onChange={updateUser}
        ></input>
      </form>
    </>
  );
}
