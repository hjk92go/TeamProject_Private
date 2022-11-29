import house01 from "../img/house01.jpg";
import house02 from "../img/house02.jpg";
import house03 from "../img/house03.jpg";
import house04 from "../img/house04.jpg";
import house05 from "../img/house05.jpg";
import {} from "../Components/VSlider.css";

const VSlider = () => {
  return (
    <div class="cards">
      <div class="outer">
        <div class="card" id="card1">
          <div class="header">
            <div class="profile">
              <div class="img">
                <img src={house01} alt="" />
              </div>
              <div class="details">
                <h2>인테리어 업체명</h2>
                <p>000-0000-0000</p>
                <p>주소 : 서면 그린아카데미 별관</p>
              </div>
            </div>
            <div class="stars">
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
            </div>
          </div>
          <div class="testimonial">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="header">
            <div class="profile">
              <div class="img">
                <img src={house02} alt="" />
              </div>
              <div class="details">
                <h2>인테리어 업체명</h2>
                <p>000-0000-0000</p>
                <p>주소 : 서면 그린아카데미 별관</p>
              </div>
            </div>
            <div class="stars">
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
            </div>
          </div>
          <div class="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div class="card" id="card3">
          <div class="header">
            <div class="profile">
              <div class="img">
                <img src={house03} alt="" />
              </div>
              <div class="details">
                <h2>인테리어 업체명</h2>
                <p>000-0000-0000</p>
                <p>주소 : 서면 그린아카데미 별관</p>
              </div>
            </div>
            <div class="stars">
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
            </div>
          </div>
          <div class="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div class="card" id="card4">
          <div class="header">
            <div class="profile">
              <div class="img">
                <img src={house04} alt="" />
              </div>
              <div class="details">
                <h2>인테리어 업체명</h2>
                <p>000-0000-0000</p>
                <p>주소 : 서면 그린아카데미 별관</p>
              </div>
            </div>
            <div class="stars">
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
            </div>
          </div>
          <div class="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div class="card" id="card5">
          <div class="header">
            <div class="profile">
              <div class="img">
                <img src={house05} alt="" />
              </div>
              <div class="details">
                <h2>Jeffrey Gray</h2>
                <p>000-0000-0000</p>
                <p>주소 : 서면 그린아카데미 별관</p>
              </div>
            </div>
            <div class="stars">
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
              <span class="op-star"></span>
            </div>
          </div>
          <div class="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSlider;
