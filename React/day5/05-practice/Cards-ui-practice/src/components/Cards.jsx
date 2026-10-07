import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





const Cards = () => {
  return (
    <div className=' p-2  realtive '>
      <div className='bg-white w-[20rem] h-100 rounded-xl  overflow-hidden  relative  shadow-2xl'   >

        <div className=' w-full h-33 bg-blue-400 relative '>
            <img className=' border-4 border-blue-400 bg-white p-1 left-23 top-7  absolute  h-full rounded-full  aspect-square  object-cover' src="https://imgs.search.brave.com/xhoFcHpoAJ3BQAHaO89kdsDnZfDj1SCPRV0vXlD7VEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODkwMzQ1MC9waG90/by9wb3J0cmFpdC1v/Zi1tYWxlLW9mZmlj/ZS1lbXBsb3llZS13/aXRoLWN1cmx5LWhh/aXItc21pbGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NzBvTldCcDJVSjQz/d2tuUHg0NkFINUJ0/ZWtJX1l1dWstQXk5/WW1QeUJwYz0" alt="" />
        </div>
        <div className="  texts flex flex-col items-center pt-8      ">
            <h1 className='text-lg font-medium'>Rohan</h1>
            <p>Assitant Manager</p>
            <p className='pt-1 font-light'>Skills React,Node</p>
            
        </div>
        <div className="icons text-2xl      flex  items-center justify-center gap-7 pt-4 rounded-full ">
            <IoLogoFacebook /> 
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
        </div>
        <div className="btn pt-7 pl-28">
            <button className='bg-red-400 px-3 py-1 rounded-2xl text-lg ' >Delete</button>
        </div>
      </div>

    </div>
  )
}

export default Cards
