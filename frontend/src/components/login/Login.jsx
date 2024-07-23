/* eslint-disable no-restricted-syntax */
import { useContext, useState } from "react";

import "./login.css";
import Layout from "../Layout/Layout";
import { userContext } from "../../contexts/userContext";

export default function Login() {
  const { user } = useContext(userContext);
  // console.log("user", user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  console.log("message", message);
  console.log("data.password", data.password);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    if (data.email !== user.email || data.password !== user.password) {
      setMessage("vérifier votre mot de passe ou votre mail");
    } else {
      setMessage(`bonjour ${user.email}`);
    }

    setData({
      email: "",
      password: "",
    });
  };
  return (
    <Layout>
      <main>
        <form onSubmit={handSubmit}>
          <h1>CONNECTEZ-VOUS</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </main>
    </Layout>
  );
}
