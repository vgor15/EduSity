import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo in navbar" />
      <ul>
        <li>Home</li>
        <li></li>
        <li>About us </li>
        <li>Contact us </li>
      </ul>
    </nav>
  );
};

export default Navbar;
