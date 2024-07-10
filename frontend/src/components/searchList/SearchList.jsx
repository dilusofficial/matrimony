import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './searchList.css'
import { useNavigate } from 'react-router-dom';

const SearchList = ({ profile}) => {
  const navigate = useNavigate()
  const redirectToSingleUser = ()=>{
    navigate(`/matrimonySingleUserView/${profile._id}`)
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={profile.imageUrl || 'default-image-url.jpg'} alt="Profile" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{profile.name}</div>
        <p className="text-gray-700 text-base">
          Age: {profile.age}
        </p>
        <p className="text-gray-700 text-base">
          State: {profile.state}
        </p>
        <p className="text-gray-700 text-base">
          District: {profile.district}
        </p>
        <p className="text-gray-700 text-base">
          Profession: {profile.profession}
        </p>
        <p className="text-gray-700 text-base">
          Education: {profile.education}
        </p>
        <p className="text-gray-700 text-base">
          Qualification: {profile.qualification}
        </p>
      </div>
      <div className='view-icon'>
        <FontAwesomeIcon icon={faEye} size="2x" onClick={redirectToSingleUser}/>
      </div>
    </div>
  );
};

export default SearchList;
