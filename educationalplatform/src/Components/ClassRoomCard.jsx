import React, { useState } from 'react'
import axios from 'axios'

const ClassRoomCard = (props) => {

    const [editmodal,setopenEditModal] = useState(0)
    const [deletemodal,setopenDeleteModal] = useState(0)
    const [id,setId] = useState()
    const [title,setTitle] = useState("")
    const [duration,setDuration] = useState(0)
    const [price,setPrice] = useState(0)


    const openeditmodal = (id) =>{
        setTitle(props.title)
        setPrice(props.price)
        setDuration(props.duration)
        setId(id)
        console.log(id)
        setopenEditModal(1)
    }
    
    const closeEditModal = () =>{
        setopenEditModal(0)
    }

    const opendeletemodal = (id) =>{
        setId(id)
        setopenDeleteModal(1)
    }

    const closeDeleteModal = () =>{
        setopenDeleteModal(0)
    }

    const handelDelete = async(e) =>{
        e.preventDefault()
        const response = await axios.post("http://localhost:8000/deleteCourse", {id},{
                headers: {
                'Content-type': 'application/json'
                }
            });
            setopenDeleteModal(0)
    }
    
    const handelSave = async(e) =>{
        e.preventDefault()
        const response = await axios.post("http://localhost:8000/editCourse", {id:id,title:title,price:price,duration:duration},{
                headers: {
                'Content-type': 'application/json'
                }
            });
            setopenEditModal(0)     
    }

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
        <div className='flex'>
        <button className="bg-blue-500 mt-10 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 w-[100px] m-5" onClick={
            ()=>openeditmodal(props.id)
        }>Update</button>
        <button className="bg-blue-500 mt-10 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 w-[100px] m-5" onClick={
            ()=>opendeletemodal(props.id)
        }>Delete</button>
        </div>
      </div>
      </div>

      {editmodal ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white rounded-lg p-5 h-[350px] w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
            <form >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="desc"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="form-input mt-1 block w-full border-black"

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        // onChange={(e)=>{setnewPrice(e.target.value)}}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                    <input
                        type="number"
                        name="desc"
                        value={duration}
                        onChange={(e)=>setDuration(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200" onClick={closeEditModal}>Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" onClick={handelSave}>Save</button>
                </div>
            </form>
        </div>
    </div>
      ):<></>}

{deletemodal ? (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
                        <p className="mb-4">Are you sure you want to delete this Course?</p>
                        <div className="flex justify-end">
                            <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200" onClick={closeDeleteModal}>Cancel</button>
                            <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200" onClick={handelDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            ):<></>}
    </div>
  )
}

export default ClassRoomCard