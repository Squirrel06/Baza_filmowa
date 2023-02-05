import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AddFilm from "./components/AddFilm";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import { isExpired } from "react-jwt";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/add"
            element={
              isExpired(localStorage.getItem("token")) ? (
                <Navigate replace to="/" />
              ) : (
                <AddFilm />
              )
            }
          />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
