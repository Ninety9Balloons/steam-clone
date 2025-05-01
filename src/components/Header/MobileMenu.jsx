import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import useOnclickOutside from "react-cool-onclickoutside";

const MobileMenu = () => {
  const { open, setOpen } = useContext(DataContext);
  const menuItems = ["Login", "Store", "Community", "About", "Support"];

  //   Closes the menu when clicked outside the menu area
  const menuRef = useOnclickOutside(() => {
    setOpen(false);
  });

  useEffect(() => {
    // If the menu is open, disable scrolling on the body
    if (open) {
      document.body.classList.add("overflow-hidden");
    }

    // when you close the menu, remove this class
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div className="absolute z-30">
      <div
        ref={menuRef}
        className={`bg-very-dark-blue shadow-[0_0px_7px_0px_rgba(0,0,0,0.75)] top-0 left-0 bottom-0 fixed w-[280px] text-[#bdbdbd] ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-all delay-75 duration-500 ease-in-out z-50`}
      >
        <ul className="flex flex-col">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="text-3xl px-3 py-5 border-t-[1px] border-[#2f3138] border-b-[1px] border-b-black cursor-pointer hover:text-white transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-screen h-screen ${
          open ? "bg-black/50 " : "bg-black/0 pointer-events-none"
        } top-0 left-0 fixed  z-30 delay-75 duration-500 transition-all`}
      ></div>
      {/* {open && (
        <div
          className={`w-screen h-screen ${
            open ? "bg-black/50" : "bg-black/0"
          } top-0 left-0 fixed  z-30 delay-75 duration-500 transition-discrete starting:bg-black/0`}
        ></div>
      )} */}
    </div>
  );
};

export default MobileMenu;
