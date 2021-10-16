import React, { useState, useContext } from "react";
import { UserContext } from "../../userContext";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [_username, _setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userame, setUsername } = useContext(UserContext);

  async function handleSubmit(event) {
    const res = await fetch("http://localhost:5000/api/users");
    const user = await res.json();
    console.log(user);

    if (user !== undefined) {
      setUsername(user.username);
    }
  }

  return (
    <div className="LoginWrapper">
      <div onSubmit={() => handleSubmit()} className="LoginDialog">
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={_username}
          onChange={(event) => _setUsername(event.target.value)}
          //   required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          //   required
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}
