import { useState } from "react";


const Product = () => {
    const imageData=[{url:"https://signal.avg.com/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/The%20Ultimate%20GTA%205%20Guide%20to%20Boosting%20Your%20Graphics%20and%20FPS/The_Ultimate_GTA_V_Performance_Guide-Thumb.jpg"},{url:"https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg"},{url:"https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg"},{url:"https://images3.alphacoders.com/235/235059.png"},{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg"}];

   
    const [imageIndex, setImageIndex]= useState(0);
    
    const handleNext=()=>{

        if(imageIndex===imageData.length-1){
            return setImageIndex(0);
        }
        setImageIndex(imageIndex+1)
    }

    const handlePrev=()=>{
        if(imageIndex===0){
            return setImageIndex(imageData.length-1);
        }
        setImageIndex(imageIndex-1)
    }

  return (
    <div className="flex justify-center pt-16">
        <img src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt="arrow" className="w-60 cursor-pointer" onClick={handlePrev}/>
        <div><img src={imageData[imageIndex].url} alt="img" className="w-[800px] h-[500px]"/> </div>
        <img src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt="arrow" className="w-60 rotate-180 cursor-pointer" onClick={handleNext}/>
    </div>
  )
}

export default Product