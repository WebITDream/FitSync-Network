import React, { useState, useEffect } from 'react';

const reasons = [
    {
      emoji: "🏋️‍♂️",
      reason: "Access to state-of-the-art fitness facilities"
    },
    {
      emoji: "💪",
      reason: "Wide range of fitness classes for all levels"
    },
    {
      emoji: "👥",
      reason: "Engaging community of like-minded fitness enthusiasts"
    },
    {
      emoji: "🏅",
      reason: "Expert trainers with personalized training plans"
    }
  ];

const WhyJoinContainer = () => {

    const [reasonIndex, setReasonIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setOpacity(0); // Fade out
        setTimeout(() => {
            setReasonIndex((prevIndex) => (prevIndex + 1) % reasons.length);
            setOpacity(1); // Fade in
        }, 500); // Wait for 500ms before fading in
        }, 3000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

  return (
    <div id="why" className="flex flex-col items-center justify-center w-1/3 lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 mx-auto mt-[5%]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold mb-4 text-center">Why Join FitSync-Network?</h1>
        <div className='justify-center'>
          <ul className="list-disc pl-4" id="reasonsList">
            <li className="mb-4 flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-2 inline-block mr-2">
                <span className="text-2xl" style={{ opacity: opacity }}>
                  {reasons[reasonIndex].emoji}
                </span>
              </div>
              <p
                id="reasonText"
                className="text-2xl font-semibold"
                style={{ opacity: opacity }}
              >
                {reasons[reasonIndex].reason}
              </p>
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
