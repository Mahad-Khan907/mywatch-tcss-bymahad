"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 

  return (
    <div className=" fixed w-full">

      <header className="flex justify-between items-center p-5 bg-orange-500 text-white">
  
        <div className="font-bold text-[27px]">My Watches</div>
        <button 
          onClick={() => setMenuOpen(!isMenuOpen)} 
          className="sm:hidden bg-white text-orange-500 px-3 py-1 rounded font-bold"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

       
        <nav className="hidden md:flex gap-8 items-center font-bold">
          <Link href="/">Home</Link>
          <Link href="/watches">Watches</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <FaShoppingCart className="text-[20px]" />
        </nav>
      </header>

      
      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col items-center bg-orange-500 text-white absolute top-16 left-0 w-full h-52 gap-4 py-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/watches" onClick={() => setMenuOpen(false)}>Watches</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <FaShoppingCart className="text-[20px]" />
        </nav>
      )}
    </div>
  );
};

export default Header;
