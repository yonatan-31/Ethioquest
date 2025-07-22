import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/ancient.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <p className='logo'>EthoQuest</p>
      <ul
        ref={menuRef}
        className={menuOpen ? "open-mobile-menu" : ""}
      >        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Photos</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img ref={iconRef} src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar