import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const data = useSelector((state) => state.Product.cartItem);
  const [userShow, setUserShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (userRef.current && userRef.current.contains(e.target)) {
        setUserShow((prev) => !prev);
      } else {
        setUserShow(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <section className="py-4 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <h3 className="font-inter font-bold text-[24px] text-[#000000]">Exclusive</h3>

          {/* Hamburger Button (Mobile Only) */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex gap-8 font-poppins font-normal text-[16px] text-[#000000] absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"} md:block`}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/product" className={({ isActive }) => isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}>About</NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}>Sign Up</NavLink>
            </li>
          </ul>

          {/* Search, Cart, Profile */}
          <div className="hidden md:flex items-center">
            {/* Search Input */}
            <div className="relative">
              <input
                type="search"
                className="w-[200px] h-[36px] border pl-4 text-sm text-black rounded-md"
                placeholder="What are you looking for?"
                aria-label="Search Products"
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 right-3 text-black text-lg">
                <CiSearch />
              </div>
            </div>

            {/* Icons */}
            <div className="pl-4 flex text-[22px] gap-4 items-center">
              <CiHeart />
              <div className="relative">
                <IoCartOutline />
                {data.length > 0 && (
                  <div className="absolute -top-2 -right-3 w-[18px] h-[18px] bg-black rounded-full text-white text-[10px] flex items-center justify-center">
                    {data.length}
                  </div>
                )}
              </div>

              {/* User Dropdown */}
              <div className="relative pl-2 text-[#DB4444] cursor-pointer" ref={userRef}>
                <FaUserCircle />
                {userShow && (
                  <div className="absolute z-50 w-[224px] h-[208px] bg-[#000000cc] text-white rounded-md left-[-180px] top-[35px] p-5 font-poppins text-sm">
                    <h3 className="flex items-center gap-3">
                      <FaRegUserCircle className="text-lg" /> Manage My Account
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
