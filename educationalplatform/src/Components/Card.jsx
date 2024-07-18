import React from 'react'
// import course from './courselogo.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Card = (props) => {
    const navigate = useNavigate();
    const handleCourse = async() =>{
        await axios.post("http://localhost:8000/addToMyCourse",{
            videoUrl:props.video,
            title:props.title,
            desc:props.desc,
            trainer:props.trainer,
            price:props.price,
            duration:props.duration,
            img:props.img
        }, {
                headers: {
                'Content-type': 'application/json'
                }
            });
            navigate('/Course')
    }
    console.log(props)
  return (
    <div className="bg-white p-6 rounded-lg mb-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img src={props.img} alt="img" className="w-full h-[200px] rounded-lg" />
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold mb-2">{props.title}</h3>
          <p className="mb-4">{props.desc}</p>
          <p className="mb-4">Trainer : {props.trainer}</p>
          <p className="mb-4">Dutration : {props.duration} hrs</p>
        </div>
        <div className="mt-4 flex-col justify-between">
        <div>
          <p className="font-bold text-xl">$ {props.price}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button className="bg-blue-500 mt-10 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 w-[100px]" onClick={handleCourse}>Buy Now</button>
      </div>
      </div>
    </div>
  )
}

export default Card