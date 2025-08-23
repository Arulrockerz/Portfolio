import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (navTitle) => {
    setActive(navTitle);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='#'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-8 sm:w-9 h-8 sm:h-9 object-contain' />
          <p className='text-white text-[14px] sm:text-[18px] font-bold cursor-pointer flex font-orbitron cosmic-glow'>
            <span className='truncate max-w-[100px] sm:max-w-full'>Arulsiddharthan</span> <span className='hidden xs:inline'>&nbsp;S</span>
            <span className='sm:block hidden nebula-text'> | Portfolio</span>
          </p>
        </a>

        <ul className='list-none flex flex-row gap-4 sm:gap-10 text-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "nebula-text" : "text-secondary cosmic-glow"
              } hover:nebula-text text-[14px] sm:text-[18px] font-medium cursor-pointer transition-colors duration-300 font-space-grotesk`}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
