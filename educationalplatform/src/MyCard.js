import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyCard = (props) => {

    const navigate = useNavigate();

    const handelOnClick = ()=>{
        navigate(`/courses/${props.id}`)
    }

  return (
    <div className="bg-white p-6 rounded-lg mb-5 shadow-lg hover:shadow-xl transition-shadow duration-300" onClick={handelOnClick}>
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
    </div>
    </div>
  )
}

export default MyCard