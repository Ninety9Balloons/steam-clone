import React from "react";

const Footer = () => {
  const links = [
    "About Valve",
    "Jobs",
    "Steamworks",
    "Steam Distribution",
    "Support",
    "Recycling",
    "Gift Cards",
  ];

  return (
    <div className="flex flex-col my-10 px-10 items-center gap-5">
      {/* Copyright */}
      <p className="text-xs text-white/50">
        © 2025 Valve Corporation. All rights reserved. All trademarks are
        property of their respective owners in the US and other countries. VAT
        included in all prices where applicable.
      </p>

      {/* Links */}
      <div className="flex text-sm flex-wrap lg:flex-nowrap justify-between items-center  text-white/75 w-full lg:divide-x-2 divide-white/75 ">
        {links.map((link, i) => (
          <p
            key={i}
            className="hover:text-white transition-all cursor-pointer w-full text-center"
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
