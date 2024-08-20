
import { useParams } from 'react-router-dom'

const Mobile = () => {
  
    const data= useParams();
    console.log(data)// {id:"cat"}

  return (
    <div>Mobile

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUusmMIKXUJemtKUreospeVfp7MjG9bmbjnA&s' alt='img'></img>
    </div>
  )
}

export default Mobile