import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { UserContext } from '../contexts/UserContext';

const PokedexGeneral = () => {
  const { setUser } = useContext(UserContext);
  const LogOut = () => {
    setUser('');
  };
  return (
    <div>
      <img src="/image2.png" alt="imgGneral" className="Img_general" />
      <button type='text' onClick={LogOut} className="bg-red-500 text-white p-2 hover:bg-red-400 rounded">Log Out</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PokedexGeneral;
