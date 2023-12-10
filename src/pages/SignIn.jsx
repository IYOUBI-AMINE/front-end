import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/SignIn.css";
import { useUser } from "../Components/Profile/UserContex";

const SignIn = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    const storedDataString = localStorage.getItem("users");

    if (storedDataString) {
      const storedUsers = JSON.parse(storedDataString);

     
      const user = storedUsers.find((user) => user.email === email);

      if (user && user.password === password) {
        
        login(user);

        navigate("/");

        
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberedPassword", password);
        } else {
          
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
        }
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No account found. Please sign up first.");
    }
  };

  return (
    <div className="body">
      <form className="sform" onSubmit={handleSignIn}>
        <br />
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label className="remember">
           <p> Remember Me
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            /></p>
            
          
        </label>
        <br />
        <br />
        <label>
          Don't have an account?{" "}
          <Link to="/SignUp" className="vlink">
            {" "}
            Sign Up
          </Link>
        </label>{" "}
        <br />
        <br />
        <button className="sub-btn" type="submit">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
};

export default SignIn;
