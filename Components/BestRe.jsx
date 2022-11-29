import {} from "../Components/BestRe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import house06 from "../img/house06.jpg";
import house04 from "../img/house04.jpg";
import house07 from "../img/house07.jpg";
const BestRe = () => {
  return (
    <div className="bestRe">
      <h1>Best Reviews</h1>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default BestRe;

function ReviewCard() {
  return (
    <div className="reviewCards">
      <div className="reCard1">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={house06} />
          <Card.Body>
            <Card.Title>말로 표현하기 부족해요!</Card.Title>
            <Card.Text>
              OO인테리어를 선택한건 올해 가장 잘한 일이였어요!
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="reCard2">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={house07} />
          <Card.Body>
            <Card.Title>남은 인생의 최고의 선택!</Card.Title>
            <Card.Text>
              OO인테리어에 의뢰를 맡긴건 제 인생에 최고의 선택입니다!
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="reCard3">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={house04} />
          <Card.Body>
            <Card.Title>제 통장을 가져가도 좋아요!</Card.Title>
            <Card.Text>이런 인테리어라면 돈이 아깝지 않아요</Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
