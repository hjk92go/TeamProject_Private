import "../css/Home.css"
import HomeAboutUs from "../components/HomeAboutUs";
import HomePortfolio from "../components/HomePortfolio";
import HomeContactUs from "../components/HomeContactUs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect, useRef } from "react";
import HomeNavbar from "../components/HomeNavbar";




const Home = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: false,
    vertical: false,
    arrows: false,
    infinite: false,
    draggable: false,
    // ๐ผ auto ๊ด๋ จ ์์ฑ ํ์ธํด๋ณด๊ธฐ -> ๋งฅ๋ถ์์ 2๋ฒ์งธ ์ฌ๋ฆญ์ด ์๋์ผ๋ก ๋์ด๊ฐ
  };

  const slider = useRef(null);

  function scroll(e) {
    if (slider === null) return 0;
    e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext();
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);
    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);


  return (
    <div className="home-slick-div">
      <div className="home-arrow"></div>
      <div id="home-container">
        <div id="home-container2">
          <Slider className="home-main-slick" {...settings2} ref={slider}>
            <div className="home-box one"><div><HomeAboutUs /></div></div>
            <div className="home-box two"><div className="home-slick-position1"><HomePortfolio /></div></div>
            <div className="home-box three"><div className="home-slick-position2"><HomeContactUs /></div></div>
          </Slider>
        </div>
      </div>
      {/** ๐ผ ์คํฌ๋กค ์ด๋ฏธ์ง(?) ์ฌ๋ผ์ง ํ์ธ ๐ */}
      <div className="home-scroll-txt">Scroll</div> 
      <img src={require("../img/logo_white.png")} className="home-logo" width="170" alt="" />
      
      <div id="outer-container">
      <HomeNavbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
        </div>
      </div>
    </div>
  );
}

export default Home;