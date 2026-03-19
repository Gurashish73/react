import React from 'react';

const Pagination = ({ index, setIndex, setUserData }) => {

    const handlePrev = () => {
        if (index > 1) {
            setUserData([]);
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        setUserData([]);
        setIndex(index + 1);
    };

    return (
        <div className="flex justify-center items-center gap-6 py-8">
            <button
                disabled={index === 1}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${index === 1
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed' // Greyed out if on page 1
                        : 'bg-amber-400 text-gray-900 hover:bg-amber-500 active:scale-95'
                    }`}
                onClick={handlePrev}
            >
                Prev
            </button>

            <span className="text-gray-300 font-medium bg-gray-800 px-4 py-2 rounded-lg shadow-inner">
                Page {index}
            </span>

            <button
                className="px-6 py-2 rounded-lg font-semibold bg-amber-400 text-gray-900 hover:bg-amber-500 active:scale-95 transition-all duration-200"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;