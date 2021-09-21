import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from '@material-ui/icons/Search';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Page </Link>
          <Link to="/"> Shop </Link>
          <Link to="/"> Portfolio </Link>
          <Link to="/"> Blog </Link>
          <Link to="/"> Elements </Link>
          <SearchIcon/>
        </div>
      </div>
      <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Page </Link>
          <Link to="/"> Shop </Link>
          <Link to="/"> Portfolio </Link>
          <Link to="/"> Blog </Link>
          <Link to="/"> Elements </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
