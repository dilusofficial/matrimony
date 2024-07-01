import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EmploymentSelectionPage() {
    const navigate = useNavigate();
    const{userRefId_ER}=useParams()
    const handleClickEmployee = () => {
        navigate(`/employeeRegistration/${userRefId_ER}`);
    };

    const handleClickEmployer = ()=>{
        navigate(`/employerRegistration/${userRefId_ER}`)
    }

    const handleClickJobSeeker=()=>{
        navigate(`/jobseekerRegistration/${userRefId_ER}`)
    }

  

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg max-w-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Select Your Employment Role
                </h2>
                <div className="flex flex-row justify-center space-x-6 mb-6">
                    <button
                        className="bg-black text-white py-3 px-10 rounded font-bold transition duration-300 hover:bg-white hover:text hover:text-black"
                        onClick={handleClickEmployer}
                    >
                        Employer
                    </button>
                    <button
                        className="bg-black text-white py-3 px-10 rounded font-bold transition duration-300 hover:bg-gray-800"
                        onClick={handleClickEmployee}
                    >
                        Employee
                    </button>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-black text-white py-3 px-10 rounded font-bold transition duration-300 hover:bg-black-900"
                        onClick={handleClickJobSeeker}
                    >
                        Job Seeker
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmploymentSelectionPage;
