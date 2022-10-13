import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boyy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import Resume from './resume.pdf';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>YOGESH GUPTA</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work. <br/> <br/>
            A professional React Developer for past 4 years and a student of Bachelors in Computer Sciences. Recently,<br/> I have made a Youtube
             channel for React. As a youtuber, I also upload my work on youtube sometimes.

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>

        </Link>
        
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/yogeshgupta123">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-gupta-b95717170/">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/yogesh2864/">
          <img src={Instagram} alt="" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009333260585">
          <img src={Facebook} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
