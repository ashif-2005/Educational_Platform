import React from 'react'
import Sidenavbar from './Sidenavbar'

const Profile = () => {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
        <Sidenavbar/>
        <div className="flex-1 p-10 overflow-y-auto">
          <div className="mb-6">
            enter yor content here PROFILE
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Profile