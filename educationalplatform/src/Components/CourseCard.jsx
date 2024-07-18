import React from 'react'
// import course from './courselogo.jpg'
import { useNavigate} from 'react-router-dom'

const CourseCard = (props) => {
    const navigate = useNavigate()
    const handelOnClick = () =>{
        navigate(`/Course/${props.trainer}`)
    }

    return (
        <div className="bg-white w-[275px] rounded-lg shadow-md overflow-hidden" onClick={handelOnClick}>
            <img src={props.img} alt="img" className="w-full h-[250px]  object-cover object-center" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{props.trainer}</h3>
                <p className="text-gray-700">{props.desc}</p>
            </div>
        </div>
    )
}

export default CourseCard