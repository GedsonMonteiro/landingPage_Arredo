import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import BannerImage from "../assets/00.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Designer lamps</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nunc libero felis, vestibulum et tincidunt a, posuere a erat. </p>
        <Link to="/">
        <Button>-See the offer</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
