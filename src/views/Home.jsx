import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const newNameValue = e.target.value;
    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required');
    else if (!/[a-z ]$/i.test(newNameValue))
      setNameError('Only letters and blanks are allowed');
    else setNameError(null);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();
    if (!nameError) {
      setUser(nameValue);
    }
  };

  return (
    <div className="Home">
      <div className=" m-20">
        <div className="flex justify-center items-center mg-15">
          <img src="/image1.png" alt="Pokedex" />
        </div>
        <div className="TextHome text-center m-10">
          <h1 className=" text-red-500 text-4xl font-bold">¡Hello Trainer!</h1>
          <p>Type your name to start</p>
        </div>
        <form
          className="FormHome flex flex-row justify-center items-center mt-8 gap-3"
          onSubmit={hanleSubmit}
        >
          <input
            type="text"
            value={nameValue}
            placeholder="Type your name"
            className="shadow-md border border-black p-3"
            onChange={handleChange}
          />
          <button type="submit" className="bg-red-500 text-white font-bold p-3">
            Start
          </button>
        </form>
        {nameError && <p className="text-red-500 text-center">{nameError}</p>}
        {user && <Navigate to="/pokedex" />}
      </div>
    </div>
  );
};

export default Home;
