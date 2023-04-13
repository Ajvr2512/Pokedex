import React from 'react';
import { Outlet } from 'react-router';

const PokedexGeneral = () => {
  return (
    <div>
      <h1> PokedexGeneral </h1>
      <Outlet />
    </div>
  );
};

export default PokedexGeneral;
