import { useContext, useEffect } from "react";
import userContext from "../contextApi/userContext";

export const Login = () => {
  //mounting

  useEffect(() => {
    let id = setInterval(() => {
      console.log("this is set Interval");
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const data = useContext(userContext);
  console.log("context data from login", data);

 const handleChange=(e)=>{
  
  data.setName(e.target.value)
 }
   
  return (
    <div>
      Login
      <img
        src="https://img.uxcel.com/tags/login-1698251086462-2x.jpg"
        alt="login"
        width={"400px"}
      ></img>

      <input type="text" placeholder="username" onChange={handleChange} className="bg-pink-300 text-3xl" value={data.name}/>

    </div>
  );
};
