import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Yogesh1996gupta@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/yogesh2864/">
          <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100009333260585">
          <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/yogeshgupta123">
          <Gitub color="white" size={"3rem"} /></a>
          
        </div>
        {/* <div className="foooter">
        <span>Created By <a href=" ">YOGESH GUPTA</a> | <span
                class="far fa-copyright"></span> 2021 All rights reserved.</span>
        </div> */}
      </div>
      
    </div>
    
  );
};

export default Footer;
