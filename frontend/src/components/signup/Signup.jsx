/* eslint-disable no-restricted-syntax */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import "./signup.css";
import Layout from "../Layout/Layout";

export default function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);
  const [dataSignup, setDataSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(dataSignup);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSignup({ ...dataSignup, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(dataSignup));
    setUser(JSON.parse(localStorage.getItem("user")));
    navigate("/login");
  };
  return (
    <Layout>
      <main className="main">
        <form className="signup" onSubmit={handleSubmit}>
          <h1>INSCRIVEZ-VOUS</h1>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <button className="singUpBtn" type="submit">
            Send
          </button>
        </form>
      </main>
    </Layout>
  );
}
