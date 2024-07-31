import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-custom-black w-[1515px] h-[500px] mt-24 flex">
        <div>
          <h2 className="text-6xl text-white font-semibold p-12">Let’s start working <br /> to build a brighter <br /> future.</h2>
          <p className="text-white pl-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Elementum posuere eget elementum vulputate elementum <br /> viverra sapien tellus aenean.</p>
          <Link href="/">
            <img src="/logos.svg" alt="" className="hover:scale-110 ml-12 mt-24 transition-transform duration-300" />
          </Link>
        </div>
        <div className="ml-36">
          <input className="border-custom-purple border-2 mt-24 py-6 w-[500px] outline-none text-white pl-6 bg-transparent" type="text" placeholder="Join our mailing list" />
          <button className="text-white -ml-20">Submit</button>
        </div>
      </footer>
    </>
  );
}
