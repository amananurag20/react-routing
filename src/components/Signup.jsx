import format from 'date-fns/format';
import { useEffect, useState } from 'react';

const Signup = () => {
  
  const [time, setTime]= useState(format(Date.now(),"hh:mm:ss a"));
  
  useEffect(()=>{

    let id=setInterval(()=>{
      setTime(format(Date.now(),"hh:mm:ss a"))
    },1000);

    return ()=>{
      clearInterval(id);
    }
  },[])

  return (
    <div className='flex justify-center'>Signup
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8RuTWFe8rQ4zp_wubfJMI_R4mD7qPZl5sQ&s" alt="img"/>

        <div className='text-5xl font-extrabold bg-pink-300 flex justify-center items-center'>{time}</div>
    </div>
  )
}

export default Signup