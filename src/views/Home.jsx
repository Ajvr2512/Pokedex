import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        <img src="/image1.png" alt="Pokedex" />
      </div>
      <div>
        <h1 className="text-red-500 text-4xl font-bold">¡Hello Trainer!</h1>
        <p>Type your name to start</p>
      </div>
      <form className="flex flex-row justify-center items-center mt-8 gap-3">
        <input type="text" className="shadow-md border border-black p-3" />
        <button type="submit" className="bg-red-500 text-white font-bold p-3">
          Start
        </button>
      </form>
    </div>
  );
};

export default Home;
