import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    onRegister();
    console.log(user);
  };
  function regAlert() {
    alert("Registeration Successfull");
    navigate("/login");
  }

  return (
    <div>
      <div className="main login-container">
        <nav>
          <span>
            <img
              width="53"
              src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
              alt=""
            />
          </span>
        </nav>
        <div className="box"></div>
        <div className="hero ">
          <div className="login-hero login-box">
            <div>
              <h2 className="login-head">Register</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="login-field"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-field"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={regAlert}
                  className="btn btn-red-sm"
                >
                  Register
                </button>
              </form>
              <p className="login-text">
                Already have an account?
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
