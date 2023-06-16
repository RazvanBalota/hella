import React from "react";
import hellaLogo from "../assets/hellaLogo.svg";

const navlinks = [
  {
    name: "Company",
    href: "",
  },
  {
    name: "Products & Services",
    href: "",
  },
  {
    name: "Press",
    href: "",
  },
  {
    name: "Career",
    href: "",
  },
  {
    name: "Investor relations",
    href: "",
  },
];

export default function Nav() {
  return (
    <nav className=" z-[9999] relative ">
      <div className="container mx-auto absolute lg:right-[10%]  ">
        <div className="flex items-center justify-between lg:justify-center lg:gap-x-16 px-4 md:px-0 lg:px-0 pt-4 lg:pt-8">
          <img src={hellaLogo} alt="" className="w-48 " />
          <div className="hidden lg:flex lg:gap-x-8">
            {navlinks.map((link) => (
              <a
                href={link.href}
                className="text-[#f1f1f1] font-semibold font-opensans tracking-wide hover:text-accent transition-all duration-200">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
