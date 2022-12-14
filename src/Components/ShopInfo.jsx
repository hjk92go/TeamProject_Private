import { } from "../Components/ShopInfo.css";
import Card from 'react-bootstrap/Card';
import MainComment from "./MainComment";
import InsertComment from "./InsertComment";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopInfo = () => {
  return (
    <div className="shopInfo">
      
        <InfoCard />
      
    </div>
  );
};

export default ShopInfo;


function InfoCard() {
  return (
    <div className="infoCards">


        <Card className="infoCard" >
          <Card.Body>
            <Card.Title><h1>업체정보</h1></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">상세보기...</Card.Subtitle>
            <Card.Text>
              <h2>
                상호명 : 및 기타
              </h2>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>


        <Card className="comment" >
          <Card.Body>
            <Card.Title><h1>한줄평</h1></Card.Title>
            <Card style={{height:"420px", overflow:"auto"}}>
            <MainComment />
            </Card>
            <InsertComment />
          </Card.Body>
        </Card>

    </div>
  );
}