import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MovieSearch from "./Components/Search/MovieSearch";
// import MovieSearch from "./Components/Search/MovieSearch";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/register"
              element={<Register onRegister={() => setIsRegistered(true)} />}
            />
            <Route
              path="/login"
              element={isRegistered ? <Login /> : <Navigate to="/register" />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/search" element={<MovieSearch />} />
          </Routes>
        </div>
      </Router>

      {/* <Login /> */}
    </>
  );
}

export default App;
