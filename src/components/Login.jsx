import { useEffect } from "react"


export const Login = () => { //mounting
  
    useEffect(()=>{       
        let id=setInterval(()=>{
          console.log("this is set Interval")
        },2000);

        return ()=>{
          clearInterval(id);
        }

    },[])

  return (
    <div>Login
        <img src="https://img.uxcel.com/tags/login-1698251086462-2x.jpg" alt="login" width={"400px"}></img>
    </div>
  )
}
