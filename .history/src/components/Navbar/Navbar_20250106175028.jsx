import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <img src={logo} alt="logo in navbar" className="logo" />
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
