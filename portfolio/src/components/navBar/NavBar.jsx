import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaBacon } from "react-icons/fa";
import { BrowserRouter, Link ,Routes, Route} from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <div className="w-full box-border flex max-md:flex-wrap p-3">
      <Link to ='/' className="flex items-center justify-start w-1/2 ">
          <FaBacon className="w-9 "/>
          <span className="font-bold text-xl">khoangynn</span>
      </Link>
      <div className="w-1/2 flex flex-col justify-center items-end md:hidden ">
        <button onClick={showNavBar}><FaBars /></button>
      </div>
      <nav className="hidden w-full box-border md:flex md:w-1/2  justify-end items-center  md:gap-5" ref={navRef}>
          <Link to='/' className="block text-end my-2 hover:underline">Home</Link>
          <Link to='/' className="block text-end my-2 hover:underline">About</Link>
          <Link to='/' className="block text-end my-2 hover:underline">Project</Link>
          <Link to='/' className="block text-end my-2 hover:underline">Tech</Link>
        </nav>
      
    </div>
  );
};

export default NavBar;
