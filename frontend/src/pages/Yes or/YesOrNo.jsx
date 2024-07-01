import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContinueOptionPage = () => {
    const navigate = useNavigate();

    const handleChoice = (choice) => {
        if (choice === 'yes') {
            navigate('/ProfileRegistration'); // Redirect to yes page
        } else {
            navigate('/no-page'); // Redirect to no page
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black text-center">
                <h1 className="text-2xl font-bold mb-5">Do you want to continue?</h1>
                <div className="flex items-center justify-around mb-4">
                    <button
                        type="button"
                        onClick={() => handleChoice('yes')}
                        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChoice('no')}
                        className="py-2 px-4 rounded bg-red-500 text-white hover:bg-red-700"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContinueOptionPage;
