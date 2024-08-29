import { useContext } from "react"
import { Link } from "react-router-dom"
import userContext from "../contextApi/userContext"
import authContext from "../contextApi/authContext"
const Navbar = () => {
  
  const authData= useContext(authContext);
  const data= useContext(userContext);
  console.log("context data",data)

  return (
    <div className='flex justify-between px-5 py-4 bg-red-700 text-white'>
        <h1 className="font-bold text-3xl">React Routing</h1>

        <div className="flex gap-5 text-2xl">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/login'>login</Link>
            <Link to='/signup'>Signup</Link>
            {authData.auth && <button onClick={()=>{authData.setAuth(false)}}>Logout</button>}
            {!authData.auth && <button onClick={()=>{authData.setAuth(true)}}>signin</button>}
        </div>
    </div>
  )
}

export default Navbar