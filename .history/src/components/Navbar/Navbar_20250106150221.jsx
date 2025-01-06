import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { sticky, setSticky } = useState(false);

  useEffect(()=>{

  },[])

  return (
    <nav className="container ">
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
