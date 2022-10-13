import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/pizza.png";
import Ecommerce from "../../img/toddo.png";
import HOC from "../../img/fresh.png";
import yyy from "../../img/yyy.png";
import Blog from "../../img/blog.png";
import Life from "../../img/life.png";
import Port from "../../img/port.png";
import textutil from "../../img/textutil.png";
import mi from "../../img/mi.png";
import gmart from "../../img/gmart.png";
import inc from "../../img/inc.png";
import fvrt from "../../img/fvrt.png";
import snake from "../../img/snake.png";
import libr from "../../img/libr.png";
import wether from "../../img/wether.png";
import quiz from "../../img/quiz.png";


import MusicApp from "../../img/dinner.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/pizzabox-react/">
          <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/toodolist-react/">
          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/Fresh-Dinner/">
          <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
       

        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/fresh-meal/">
          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/abc/yyy.html">
          <img src={yyy} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/Blog-template/">
          <img src={Blog} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/lifestyle-bootstrap/products.html">
          <img src={Life} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/portfolio.github.io/">
          <img src={Port} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/textutils/">
          <img src={textutil} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/reactmiclone/">
          <img src={mi} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://gmart.in/">
          <img src={gmart} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/incremntdecrement/">
          <img src={inc} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/annimatedwebsite/">
          <img src={fvrt} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/snake-game/">
          <img src={snake} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/clg-library/">
          <img src={libr} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/clg-library/">
          <img src={wether} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yogeshgupta123.github.io/quiz-app/">
          <img src={quiz} alt="" /> </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
