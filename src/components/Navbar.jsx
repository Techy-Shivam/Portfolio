import name from '../assets/name.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  // navbar animation on load
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  });

  // animate menu open/close
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <nav ref={navbarRef} className="fixed top-0 w-full mix-blend-difference z-50">
        <div className="main-container py-6 flex items-center justify-between">
          <img src={name} alt="Logo" className="h-12 w-auto" />

          {/* Toggle button */}
          <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <img src={close} alt="close" className="h-8 w-auto" />
            ) : (
              <img src={menu} alt="menu" className="h-8 w-auto" />
            )}
          </div>
        </div>
      </nav>

      {/* Fullscreen menu - conditional */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed z-40 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8"
        >
          <Link to="/" className='menu-link' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" className='menu-link' onClick={() => setMenuOpen(false)}>Projects</Link>
          <a href="mailto:shivamkumarsukla13@gmail.com" className='menu-link'>Contact</a>

        </div>
      )}
    </>
  );
};

export default Navbar;
