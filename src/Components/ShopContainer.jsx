import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShopSlick from "./ShopSlick";
import {} from "../Components/ShopSlick.css";

const ShopContainer = () => {
  return (
    <div className="outer">
    <Container>
      <Row>
        <Col>
          <ShopSlick />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ShopContainer;
