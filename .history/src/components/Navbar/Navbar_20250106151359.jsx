import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

<<<<<<< Tabnine <<<<<<<
const Navbar = () => {
  const { sticky, setSticky } = useState(false);//-
  const [sticky, setSticky] = useState(false);//+

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);//-
  }, [setSticky]); // Added setSticky to the dependency array//+

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
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
>>>>>>> Tabnine >>>>>>>// {"conversationId":"b1482c7c-8e1c-4c8c-8bc4-f7811f894778","source":"instruct"}

export default Navbar;
