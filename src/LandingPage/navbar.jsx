// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
    closeDropdown();
  };
  const scrollToBenefits = () => {
    const aboutUsSection = document.getElementById("benefits");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
    closeDropdown();
  };
  const scrollToContacts = () => {
    const aboutUsSection = document.getElementById("contacts");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
    closeDropdown();
  };

  return (
    <nav
      className={` bg-[#fff] shadow-md min-w-fit ${isSticky ? "sticky top-0 z-50" : ""}`}
    >
      <div className="container mx-auto px-4 items-start lg:px-1">
        <div className="py-3 flex justify-between items-center">
          <div className="lg:hidden ">
            <button
              onClick={toggleDropdown}
              className="text-[#013b0d] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex ">
            <Link
              to="/"
              className="lg:text-3xl text-xl text-[#013b0d] flex  -ml-20  lg:ml-5 font-semibold"
            >
              <h1 className=" text-left  font-extrabold">AFProduce</h1>{" "}

            </Link>
          </div>
          <div className="hidden lg:flex space-x-10">
            <Link
              to="/"
              onClick={closeDropdown}
              className='bg-transparent text-[#013b0d] border-[#013b0d] hover:text-white hover:bg-[#013b0d] border font-semibold text-${isSticky ? "white" : "white"
            }  px-4 py-1  rounded-lg'
            >
              Home
              
            </Link>
            {/* <div className=' bg-transparent'>

              <select id='houseType' className='bg-transparent font-semibold text-white  rounded-md px-4  shadow-md focus:outline-none focus:ring-2 focus:ring-black-500'>
                <option disabled selected >Services</option>
                <option value='1'>Apartment</option>
                <option value='2'>Bookings</option>
                <option value='3'> Short stay</option>
                <option value='3'> Lodging</option>
                <option value='3'> leasing</option>
              </select>
            </div> */}

            <Link
              onClick={scrollToBenefits}
              className='bg-transparent text-[#013b0d] border-[#013b0d] hover:text-white hover:bg-[#013b0d] border font-semibold text-${isSticky ? "white" : "white"
            }  px-4 py-1  rounded-lg'
            >
              About Us
            </Link>
            {/* <Link
              onClick={scrollToContacts}
              className=" text-white font-semibold "
            >
              Contact us
            </Link> */}
          </div>
          {/* <div className=" hidden lg:flex space-x-4  ">
            <div className='border bg-[#f0f0f0] p-2 flex rounded-full '>
              <FaSearch className=" opacity-40" />
              <input
                type="text"
                placeholder="Search for products..."
                className={`p-2 h-2 w-60 text-sm  bg-[#f0f0f0]  focus:outline-none focus:border-green-500 `}

              />
            </div>
          </div> */}

          {/* <div className="flex gap-2">
            {/* <Link to="/signup">
              <button className={`font-semibold text-white px-4 py-1`}>Sign in</button>

            </Link> */}
          {/* <div
              // icon={<FaUser />}
              alt="profile"
              className="rounded-full w-8  lg:w-12 h-8 lg:h-8 bg-[#fff]   flex lg:hidden items-center justify-center"
            >
              <FaSearch
                size={20} />
            </div> */}
          {/* <div
              // icon={<FaUser />}
              alt="profile"
              className="rounded-full w-8  lg:w-12 h-8 lg:h-8 bg-[#fff]   flex items-center justify-center"
            >
              <FaShoppingCart
                size={20} />
            </div> */}
          {/* <div
              // icon={<FaUser />}
              alt="profile"
              className="rounded-full w-8  lg:w-8 h-8 lg:h-8 bg-[#fff] border border-black flex items-center justify-center"
            >
              <FaUser
                size={20} />
            </div> */}
          {/* <Link to="/login">
              <button
                className={`bg-transparent text-white border-white border font-semibold text-${isSticky ? "white" : "white"
                  }  px-4 py-1  rounded-lg `}
              >
                Get Started
              </button>
            </Link> */}
          {/* </div> */}

          {isDropdownOpen && (
            <div className="lg:hidden absolute z-10   top-0 right-0 h-full w-4/5 bg-[#013b0d] text-white shadow-md p-4">
              <div className="flex text-white flex-col space-y-6">
                <Link
                  to="/"
                  onClick={closeDropdown}
                  className="block  font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  Home
                </Link>
                <Link
                  onClick={scrollToAboutUs}
                  className="block  font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  About Us
                </Link>
                {/* <Link
                  onClick={scrollToBenefits}
                  className="block  font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  New Arrivals
                </Link>
                <Link
                  onClick={scrollToContacts}
                  className="block  font-semibold py-2 hover:bg-gray-100 rounded"
                >
                  Brands
                </Link>
                <Link to="/signup">
                  <button className="block font-semibold text-left py-2">
                    Sign Up
                  </button>
                </Link>
                <Link
                  to="/login"
                  onClick={closeDropdown}
                  className="block bg-[#000] text-white font-semibold py-1 rounded-lg text-center w-20"
                >
                  <button>Log in</button>
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
