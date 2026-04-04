import React from 'react'
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icon">
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <li>Audio Discription</li>
            <li>Invester Relation</li>
            <li>Legal Notice</li>
          </div>
          <div>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Prefernce</li>
          </div>
          <div>
            <li>Gift Card </li>
            <li>Term Of Use </li>
            <li>Corporate Information</li>
          </div>
          <div>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
