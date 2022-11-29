import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {} from "../Components/MergePage.css";
import BestRe from "./BestRe";
import ShopDesc from "./ShopDesc";
import ShopSlick from "./ShopSlick";
import { useEffect, useRef } from "react";
// import ShopContainer from "./ShopContainer";

const MergePage = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: false,
    vertical: true,
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
    <div>
      <Container>
        <Row>
          <Col>
            <Slider {...settings2} ref={slider}>
              <div className="top">
                <ShopSlick />
              </div>
              <div className="mid">
                <BestRe />
              </div>
              <div className="bottom">
                <ShopDesc />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MergePage;
