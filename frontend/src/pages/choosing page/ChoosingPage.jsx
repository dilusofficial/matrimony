import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LongTermShortTermSelection = () => {
    const [relationshipType, setRelationshipType] = useState('');
    const navigate = useNavigate();

    const handleSelect = (type) => {
        setRelationshipType(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (relationshipType === 'long-term') {
            navigate('/ContinueOptionPage'); // Redirect to long-term page
        } else if (relationshipType === 'short-term') {
            navigate('/short-term-page'); // Redirect to short-term page
        } else {
            alert('Please select a relationship type');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black"
            >
                <h1 className="text-2xl font-bold mb-5 text-center">Select Relationship Type</h1>
                <div className="flex items-center justify-around mb-4">
                    <button
                        type="button"
                        onClick={() => handleSelect('long-term')}
                        className={`py-2 px-4 rounded ${
                            relationshipType === 'long-term' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                        }`}
                    >
                        Long Term
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSelect('short-term')}
                        className={`py-2 px-4 rounded ${
                            relationshipType === 'short-term' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                        }`}
                    >
                        Short Term
                    </button>
                </div>
                <button 
                    type="submit" 
                    className="w-full py-3 bg-black hover:bg-gray-800 rounded text-white font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LongTermShortTermSelection;
