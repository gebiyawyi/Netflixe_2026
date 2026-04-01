import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import netflix from "../../assets/images/netflix.png";
import "./header.css";
function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflix} alt="" />
            </li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movie</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Brwose By Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
            <NotificationIcon />
          </li>
          <li>
            <AccountBoxIcon/>
          </li>
          <li>
            <ArrowDropDownIcon /> 
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
