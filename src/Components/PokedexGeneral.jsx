import React from 'react';
import { Outlet } from 'react-router';

const PokedexGeneral = () => {
  return (
    <div>
      <img src="/image2.png" alt="imgGneral" className="Img_general"/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PokedexGeneral;
