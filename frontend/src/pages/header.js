import React from 'react';

const HeaderContainer = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row animate__animated animate__fadeIn" style={{ marginLeft: '5.5%' }}>
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start pl-8 text-white">
        <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4">
          Unlock Your Full Fitness Potential <br /> with FitSync Network
        </h1>
        <h2 className="text-white text-lg max-w-md">
          Join a Community of Fitness Enthusiasts and Achieve Your Goals Together
        </h2>
        <a style={{ textDecoration: 'none', color: 'white' }} className="mt-8" href="#aboutus">
          <button className="button-64 w-96" role="button">
            <span className="text">Find out more</span>
          </button>
        </a>
      </div>
      <img className="rounded-full lg:h-[85%] lg:self-center mt-8 lg:mt-0 border-4 border-slate-400 element" src="assets/gym.jpg" alt="Fitness Gym" />
    </div>
  );
};

export default HeaderContainer;
