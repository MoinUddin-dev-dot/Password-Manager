import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white fixed w-full">
      <div className="mycontainer flex justify-between px-4  items-center h-15 mycontainer">
        <div className="logo font-bold  text-2xl">
          <span className="text-green-500"> &lt; &nbsp;</span>
          Pass
          <span className="text-green-500">OP&nbsp; / &gt;</span>
          
          </div>
        {/* <ul className="flex gap-10">
          <li>
            <a className="hover:font-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="/">
              About
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="/">
              Contacts
            </a>
          </li>
        </ul> */}
        <button className=" text-white flex justify-between items-center gap-2 bg-green-700 mx-2 rounded-full p-1 px-2 ring-white ring-1">
          <img className="invert w-10" src="/icons/github.svg" alt="github logo" />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
