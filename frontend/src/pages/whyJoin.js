import React from 'react';

const WhyJoinContainer = () => {
  return (
    <div id="why" className="flex flex-col items-center justify-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-auto w-full">
        <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold mb-4 text-center">Why Join FitSync-Network?</h1>
            <div className='justify-center'>
                <ul className="list-disc pl-4" id="reasonsList">
                <li className="mb-4 flex items-center">
                    <div className="bg-blue-500 text-white rounded-full p-2 inline-block mr-2">
                    <span className="text-2xl" id="emoji">🏋️‍♂️</span>
                    </div>
                    <p id="reasonText" className="text-2xl font-semibold">Access to state-of-the-art fitness facilities</p>
                </li>
                </ul>
                <div className="flex justify-around mt-8">
                <div className="flex flex-col items-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-4">
                    <div className="bg-blue-500 text-white rounded-full p-2 inline-block mb-4">
                    <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-2xl font-semibold">Personalized fitness plans to meet your goals</p>
                </div>
                <div className="flex flex-col items-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-4">
                    <div className="bg-blue-500 text-white rounded-full p-2 inline-block mb-4">
                    <span className="text-2xl">🤝</span>
                    </div>
                    <p className="text-2xl font-semibold">Connect with a community of like-minded fitness enthusiasts</p>
                </div>
                </div>
                <div className="flex justify-around mt-8">
                <div className="flex flex-col items-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-4">
                    <div className="bg-blue-500 text-white rounded-full p-2 inline-block mb-4">
                    <span className="text-2xl">🌟</span>
                    </div>
                    <p className="text-2xl font-semibold">Access to exclusive fitness events and workshops</p>
                </div>
                <div className="flex flex-col items-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-4">
                    <div className="bg-blue-500 text-white rounded-full p-2 inline-block mb-4">
                    <span className="text-2xl">💪</span>
                    </div>
                    <p className="text-2xl font-semibold">Expert trainers to guide and support your fitness journey</p>
                </div>
                </div>
                <div className="flex flex-col items-center mt-8 flex-col">
                    <a style={{ textDecoration: 'none', color: 'white' }} href="#plans">
                        <button className="button-64 w-96" role="button">
                            <span className="text">Join Us</span>
                        </button>
                    </a>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default WhyJoinContainer;
