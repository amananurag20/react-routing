import { useState } from "react";
import {data} from "../utils/constant"

const HomePage = () => { 

   const [count, setCount]= useState(100);
  console.log(data)
 
  return (
    <div>
      This is homeeee HomePage
     
      {count}
      <button onClick={()=>setCount(count+100)} className="bg-blue-500">Increase counter</button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6hx9mmaps6rY5bJizCvWO2J-QrPCEpSqaw&s"
        alt="img"
      />

      {data.map((car)=>{

        return <div className="flex text-3xl font-semibold" key={Math.random()}>
          <h1 className="bg-blue-950 mr-6">{car.model}</h1>
          <p className="bg-green-500">{car.price}</p>
        </div>
      })}
    </div>
  );
};

export default HomePage;
