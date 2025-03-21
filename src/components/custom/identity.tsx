import React from "react";

interface IdentityProps {
  name: string;
  aka: string;
}

const identity: IdentityProps = {
  name: "arya dira hernanda",
  aka: "designer & developer",
};

const Identity = () => {
  return (
    <div className='identity'>
      <p className='capitalize text-base'>{identity.name}</p>
      <p className='capitalize text-sm text-[#555555]'>{identity.aka}</p>
    </div>
  );
};

export default Identity;
