import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({onSearch, cartItemCount}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length){
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

  return (
    <div className=" bg-cyan-500 p-3">
      <header className="flex flex-row space-x-4 m-auto">
        <Link to="/">
          <h1 className=" text-3xl text-white font-sans">Shopping Cart</h1>
        </Link>
        <form className="flex flex-row mt-1" role="search">
          <input
            className="w-[30rem] h-2 p-3 border-2 ml-20 rounded border-solid"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <button className="bg-white text-cyan-600 border-solid rounded h-9 w-24 text-xl ml-3"
          onClick={handleSubmit}>
            Search
          </button>
        </form>
        <Link to="/cart" className="flex flex-row">
          <img
            className="h-10 w-10 ml-20 hover:scale-125 static"
            src="https://img.icons8.com/fluency/48/fast-cart.png"
            alt="fast-cart"
          />
          {cartItemCount > 0 && (
            <div className="text-white sticky text-sm"  >{cartItemCount <= 9 ? cartItemCount : "9+" }</div>
          )}
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
