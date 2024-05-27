import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center px-10 py-4 border-4 border-cyan-500">
      <div className="text-3xl">HEADER</div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
};

export default Header;
