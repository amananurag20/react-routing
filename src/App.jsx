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
import colorContext from "./contextApi/colorContext";
import authContext from "./contextApi/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./components/Product";

const App = () => {
  const [name, setName] = useState("aman");
  const [color, setColor] = useState("red");
  const [auth, setAuth] = useState(true);
  return (
    <div>
      <authContext.Provider value={{ auth, setAuth }}>
        <colorContext.Provider value={{ color, setColor }}>
          <userContext.Provider value={{ name, setName }}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                   <Route path="/signup" element={<Signup />} />
                   <Route path="/profile" element={<Profile />} />
                   <Route path="/products" element={<Product/>}/>
                </Route>
                <Route path="/mobile/:name/:lion" element={<Mobile />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>
          </userContext.Provider>
        </colorContext.Provider>
      </authContext.Provider>
    </div>
  );
};

export default App;
