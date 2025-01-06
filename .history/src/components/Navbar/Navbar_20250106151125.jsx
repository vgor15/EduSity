import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { sticky, setSticky } = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
/*************  ✨ Codeium Command 🌟  *************/
    <nav className="container" style={{ backgroundColor: sticky ? "#212ea0" : "transparent" }}>
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
/******  a003d910-3768-4a18-b845-f652c929141c  *******/
      <img src={logo} alt="logo in navbar" className="logo" />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
