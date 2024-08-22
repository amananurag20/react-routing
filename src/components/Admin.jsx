import { Outlet } from "react-router-dom"


const Admin = () => {
  return (
    <div className='text-4xl font-extrabold'>Admin
    <Outlet/>
    </div>
  )
}

export default Admin