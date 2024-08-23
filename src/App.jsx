import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Mobile from "./components/Mobile";
import Admin from "./components/Admin";
import userContext from "./contextApi/userContext";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("aman");
  return (
    <div>
      <userContext.Provider value={{ name, setName }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mobile/:name/:lion" element={<Mobile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
};

export default App;
