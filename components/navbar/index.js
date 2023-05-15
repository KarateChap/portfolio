import Image from "next/image";
import gmail from "@public/gmail.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  let lastScroll = 0;
  if (process.browser) {
    const body = document.body;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }

      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }

      lastScroll = currentScroll;
    });
  }

  return (
    <>
      <header className=" w-full h-[7vh] text-white bg-[#0a0a0a] items-center px-[50px] justify-between fixed hidden md:flex z-[10] transition-all duration-300">
        <div className="flex">
          <ul className="flex gap-10 tracking-wider text-sm">
            <li className="hover: cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <span className="text-yellow-300">01.</span> About
              </Link>
            </li>
            <li className="hover: cursor-pointer">
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <span className="text-yellow-300">02.</span> Works
              </Link>
            </li>
            <li className="hover: cursor-pointer">
              <Link
                to="technologies"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <span className="text-yellow-300">03.</span> Technologies
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-5 ">
          <div className="cursor-pointer"></div>
          <button className="text-sm bg-yellow-300/10 px-4 py-2 tracking-wider border border-1 border-yellow-300 rounded-md flex text-yellow-300">
            <a
              href="https://drive.google.com/file/d/1C_vEwqj7-0TqIUgucx4X9o4Bvr3RcAm2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </header>

      <div className="flex flex-col md:hidden w-full h-[auto] fixed z-[100]">
        <div
          className="w-full flex justify-end mt-5 px-5 cursor-pointer z-[100]"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          {!showLinks ? (
            <Bars3Icon className="text-white w-8" />
          ) : (
            <XMarkIcon className="text-white w-8" />
          )}
        </div>

        {showLinks && (
          <div className="w-full justify-center text-center bg-[#0a0a0a] h-full fixed">
            <ul className="text-white flex flex-col gap-5 mt-20">
              <li className="hover: cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-yellow-300 transition-all duration-300"
                  onClick={() => {
                    setShowLinks(!showLinks);
                  }}
                >
                  <span className="text-yellow-300">01.</span> About
                </Link>
              </li>
              <li className="hover: cursor-pointer">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-yellow-300 transition-all duration-300"
                  onClick={() => {
                    setShowLinks(!showLinks);
                  }}
                >
                  <span className="text-yellow-300">02.</span> Works
                </Link>
              </li>
              <li className="hover: cursor-pointer">
                <Link
                  to="technologies"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-yellow-300 transition-all duration-300"
                  onClick={() => {
                    setShowLinks(!showLinks);
                  }}
                >
                  <span className="text-yellow-300">03.</span> Technologies
                </Link>
              </li>
            </ul>
            <div className="w-full flex justify-center mt-10">
              <button className="text-sm bg-yellow-300/10 px-4 py-2 tracking-wider border border-1 border-yellow-300 rounded-md flex text-yellow-300">
                <a
                  href="https://drive.google.com/file/d/1K77RdeNIyBJlAhB6Y_aW0JC0NZsFN-zM/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
