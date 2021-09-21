import React from "react";
import BannerImage from "../assets/00.jpeg";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Designer lamps</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nunc libero felis, vestibulum et tincidunt a, posuere a erat. </p>
        <Link to="/">
        <Button>-See the offer</Button>
        </Link>
      </div>
    </div>
    ),

    <div className="menu">
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
