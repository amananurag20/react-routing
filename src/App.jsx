import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Mobile from "./components/Mobile";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} >
             <Route path="/admin/signup" element={<Signup />} />
             <Route path="/admin/profile" element={<Profile />} />
          </Route>
          <Route path="/mobile/:name/:lion" element={<Mobile/>}/>
          <Route path="*" element={<Error/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
