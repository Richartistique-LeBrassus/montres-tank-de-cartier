"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-4 tracking-widest
          text-lg flex items-center justify-between gap-5 hover:cursor-pointer
          lg:w-fit"
      >
        <span>{title}</span>
        <ChevronDown
          className={`transition-transform duration-300  ${
            isOpen ? "rotate-180" : ""
          }`}
          size={16}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="w-full text-start mx-auto pl-5">
          <div
            className="max-w-7xl mx-auto py-8 px-4
              flex flex-col gap-8  andrew
              text-base font-semibold tracking-widest"
          >
            {links.map((link) => (
              <div key={link}>
                <h3 className="cursor-pointer">{link}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}