import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      setError("");
      alert("Login successful!");
      navigate('/');
    } else {
      setError("Invalid username or password");
    }
  };

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
            <h2 className="login-head">Sign in</h2>
            <form onSubmit={handleSubmit}>
              <div>
                {/* <label className="login-text" >Username:</label> */}
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
                {/* <label className="login-text" >Password:</label> */}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-field"
                  placeholder="Enter your user password"
                />
              </div>
              <button type="submit" className="btn btn-red-sm">
                Login
              </button>
            </form>
            {error && <p style={{ color: "red" }} className="login-error">{error}</p>}
            <p className="login-text">
              Don't have an account? <Link to="/register" className="login-link" >Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
