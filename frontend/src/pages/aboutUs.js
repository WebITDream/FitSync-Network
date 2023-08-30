import React from 'react';

const AboutUs = () => {
    return (
      <div className="flex flex-col items-center lg:w-1/3 bg-gray-800 text-white p-8 rounded-lg border-2 border-slate-600 my-8 mx-auto" id="aboutus">
      <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <p className="text-lg">
          Welcome to <span className="font-bold">FitSync-Network</span>, where fitness meets community! 🏋️‍♀️ Our
          mission is to provide you with the best resources and support on your fitness journey, all while connecting
          you with like-minded enthusiasts.
        </p>
        <p className="text-lg">
          Our team of <span className="font-bold">expert trainers</span> is dedicated to helping you achieve your
          fitness goals. From personalized workout plans to exciting events, we've got you covered. Join our vibrant
          community and embark on a journey to a <span className="font-bold">healthier, happier you</span>! 💪
        </p>
      </div>
      <line className="w-1/2 mx-auto my-8 " />
      <hr></hr>
      <div className="grid md:grid-cols-2 gap-6">
        <p className="text-lg">
          Welcome to <span className="font-bold">FitSync-Network</span>, where fitness meets community! 🏋️‍♀️ Our
          mission is to provide you with the best resources and support on your fitness journey, all while connecting
          you with like-minded enthusiasts.
        </p>
        <p className="text-lg">
          Our team of <span className="font-bold">expert trainers</span> is dedicated to helping you achieve your
          fitness goals. From personalized workout plans to exciting events, we've got you covered. Join our vibrant
          community and embark on a journey to a <span className="font-bold">healthier, happier you</span>! 💪
        </p>
      </div>
    </div>
    );
  };

export default AboutUs;
