"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [scrollDir, setScrollDir] = useState("up"); 
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      setScrolled(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full text-sm uppercase nova
        transition-all duration-500 ease-in-out
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "bg-black shadow-md" : "bg-transparent text-neutral-50"}
        md:py-11 py-[24px] px-4 md:px-8`}
    >
      <div className="px-auto flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between gap-3 2xl:gap-4 max-w-fit">
          <div className="relative w-[18px] h-[18px]">
            <div className="absolute inset-0 flex flex-col justify-between mt-1 w-full h-2 lg:h-2.5">
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-neutral-50 transition-all duration-500 ease-in-out"></span>
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-neutral-50 transition-all duration-500 ease-in-out"></span>
            </div>            
          </div>
        </div>
        <div className="w-[108.8px] h-[31.19px]
          md:w-[160px] md:h-[45.59px] 
          absolute left-1/2 transform -translate-x-1/2"
        >
          <Link href="/" aria-label="Link to home page.">
            <Image
              src="/imgs/white-logo.svg"
              alt="Logo White"
              fill
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-3 max-w-fit">
          <div className="h-fit w-fit">
            <Search className="w-6 h-6 text-neutral-50" />
          </div>  
        </div>
      </div>
    </nav>
  );
};

export default Nav