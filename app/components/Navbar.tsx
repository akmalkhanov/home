import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-around mt-8">
        <div>
          <Link href="/">
            <img src="/logo.svg" alt="" className="hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
        <div className="text-xl font-bold flex gap-10">
          <Link className="hover:rotate-12 transition-transform duration-300 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-indigo-600 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100" href="/">Home</Link>
          <Link className="hover:-rotate-12 transition-transform duration-300 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-indigo-600 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100" href="/about">About</Link>
          <Link className="hover:rotate-12 transition-transform duration-300 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-indigo-600 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100" href="/services">Services</Link>
          <Link className="hover:-rotate-12 transition-transform duration-300 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-indigo-600 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100" href="/systems">Systems</Link>
        </div>
        <div>
          <button className="text-xl font-bold border-2 border-indigo-600 px-6 py-4 rounded-full text-indigo-600 transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-500 hover:text-white hover:border-indigo-500 hover:-rotate-12">Contact Us</button>
        </div>
      </nav>
    </>
  );
}
