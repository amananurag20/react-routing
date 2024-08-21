import { useEffect, useState } from "react"


const Profile = () => {
   
  const [mousePosition, setMousePosition]= useState({x:0,y:0});
  useEffect(()=>{
    
    const handleMove=(event)=>{      
      let currentX=event.clientX;
      let currenty=event.clientY;
      setMousePosition({x:currentX,y:currenty});
      
    }

    window.addEventListener("mousemove",handleMove);

    return ()=>{
      
      window.removeEventListener("mousemove",handleMove)
    }
  })

  return (
    <div className="flex justify-center items-center ">Profile
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&s" alt="profile"/>

       <div className="text-4xl font-bold text-rose-400">{mousePosition.x}/{mousePosition.y}</div>
    </div>
  )
}

export default Profile