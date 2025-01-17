//Icon
import NextBtnIcon from "../../icons/carDetailPage/nextBtnIcon";
import PreviousBtnIcon from "../../icons/carDetailPage/previousBtnIcon";
import EmailIcon from "../../icons/carDetailPage/emailIcon";
import PhoneIcon from "../../icons/carDetailPage/phoneIcon";
import ShareIcon from "../../icons/carDetailPage/shareIcon";
import HeartIcon from "../../icons/carDetailPage/Heart";
import LikedIcon from "../../icons/carDetailPage/Liked";
//react
import { useState } from "react";
//css
import "./style.css";

//Chưa thêm phần vote sao cho xe
const CarDetailPage = () => {
  const [crrImg, setCrrImg] = useState(0);
  const [btnLikeProduct, setBtnLikeProduct] = useState(false);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [comment, setComment] = useState(null);

  const listImgRv = [
    "./public/imgs/carDetailPage/carDetail1.png",
    "./public/imgs/carDetailPage/carDetail2.png",
    "./public/imgs/carDetailPage/carDetail3.png",
    "./public/imgs/carDetailPage/carDetail4.png",
    "./public/imgs/carDetailPage/carDetail5.png",
  ];

  //hàm chuyển ảnh
  const nextRVImg = () => {
    setCrrImg((prev) => (prev - 1 + listImgRv.length) % listImgRv.length);
  };

  const previousRVImg = () => {
    setCrrImg((prev) => (prev + 1) % listImgRv.length);
  };
  // hàm thích sản phẩm (chưa kết hợp api để lưu - mới là ảnh động)
  const handleLikeProduct = () => {
    if (!btnLikeProduct) {
      setBtnLikeProduct(true);
    } else {
      setBtnLikeProduct(false);
    }
  };

  return (
    <div className="CarDetailPage">
      <h1 className="nameCar">Mitsubishi Xpander 1.5 AT Premium 2022</h1>
      <div className="imgReviewCar Frame1">
        <div className="mainImgRV">
          <img src={listImgRv[crrImg]} alt="Car Detail" />
          <div className="changeImgFrame">
            <button className="nextImgRv" onClick={nextRVImg}>
              <NextBtnIcon />
            </button>
            <button className="previousImgRv" onClick={previousRVImg}>
              <PreviousBtnIcon />
            </button>
          </div>
        </div>
        <div className="listImgRV">
          {listImgRv.map((img, index) => (
            <div
              key={index}
              className={`item ${crrImg === index ? "active" : ""}`}
              onClick={() => setCrrImg(index)}
            >
              <img src={img} alt={`Car Detail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="Frame2 allCarInformation">
        <div className="frameLeft">
          <div className="section1 loveAndShareFrame">
            <div className="likeFrame item" onClick={handleLikeProduct}>
              {!btnLikeProduct ? <HeartIcon /> : <LikedIcon></LikedIcon>}

              <div className="text">Yêu thích</div>
            </div>
            <div className="line"></div>
            <div className="shareFrame item">
              <ShareIcon></ShareIcon>
              <div className="text">Chia sẻ</div>
            </div>
          </div>
          <div className="section2 section">
            <h2>Miêu tả</h2>
            <div className="text">
              Mitsubishi Xpander 2022 mang đến trải nghiệm lái tốt hơn và thoải
              mái hơn trên mọi hành trình nhờ sự nâng cấp đáng giá ở các chi
              tiết vận hành: Hệ thống treo cứng cáp và ổn định hơn với sự gia
              tăng kích thước của bộ giảm xóc, kích thước phuộc, van bên trong
              và lò xo phuộc trước, sau cũng được điều chỉnh nhằm tối đa hóa
              hiệu quả của hệ thống treo; kết hợp với khung xe RISE cấu tạo bởi
              thép siêu cường càng làm tăng thêm tính vững chắc của xe khi di
              chuyển; hộp số tinh chỉnh để phù hợp với nhu cầu sử dụng của khách
              hàng; tăng cường vật liệu cách âm; trang bị hiện đại hơn với phanh
              tay điện tử, giữ phanh tự động; tiện nghi hơn với bệ tì tay hàng
              ghế trước tích hợp ngăn chứa khăn giấy, cổng sạc USB cho 2 hàng
              ghế, ghế da với vật liệu giảm hấp thụ nhiệt.{" "}
            </div>
          </div>
          <div className="section3 section">
            <h2>Thông tin người bán</h2>
            <div className="DealerInfo">
              <div className="item dealerNameAndAva">
                <div className="ava">
                  <img
                    src="./public/imgs/carDetailPage/carDetail1.png"
                    alt=""
                  />
                </div>
                <div className="name">
                  <div className="text">TrungLe</div>
                  <div className="role">Người bán</div>
                </div>
              </div>
              <div className="line"></div>

              <div className="item dealerPhoneNumber">
                <div className="icon">
                  <PhoneIcon></PhoneIcon>
                </div>
                <div className="phoneNumber">000-000-000</div>
              </div>
              <div className="line"></div>

              <div className="item dealerEmail">
                <div className="icon">
                  <EmailIcon></EmailIcon>
                </div>
                <div className="email">trungle.kqt@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="section4 section">
            <h2>Để lại thông tin liên hệ</h2>
            <form action="" className="contactForm">
              <div className="userNameAndEmail">
                <div className="userName item">
                  <h3>Tên</h3>
                  <input
                    type="text"
                    placeholder="Tên"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="userEmail item">
                  <h3>Email</h3>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="item">
                <h3>Số điện thoại</h3>
                <input
                  type="number"
                  placeholder="Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="item comment">
                <h3>Bình luận</h3>
                <input
                  type="text"
                  placeholder="Để loại bình luận"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <button>Liên hệ</button>
            </form>
          </div>
        </div>
        <div>
          <div className="frameRight">
            <h3>Thông tin về xe</h3>
            <p>
              Giá: <span>100.000 vnđ</span>
            </p>
            <div className="line"></div>
            <div className="section section1">
              <h4>Tổng quan</h4>
              <div className="content">
                <div className="row">
                  <div className="title">Phiên bản</div>
                  <div className="text">1.5 AT Premium</div>
                </div>
                <div className="row">
                  <div className="title">Màu</div>
                  <div className="text">Nâu</div>
                </div>
                <div className="row">
                  <div className="title">Số ghế</div>
                  <div className="text">7</div>
                </div>
                <div className="row">
                  <div className="title">ODO</div>
                  <div className="text">35.000km</div>
                </div>
                <div className="row">
                  <div className="title">Năm sản xuất</div>
                  <div className="text">2022</div>
                </div>
                <div className="row">
                  <div className="title">Xuất xứ</div>
                  <div className="text">Nhật</div>
                </div>
              </div>
            </div>
            <div className="line"></div>

            <div className="section section2">
              <h4>Thông số chi tiết</h4>
              <div className="content">
                <div className="row">
                  <div className="title">Hộp số</div>
                  <div className="text">Tự động</div>
                </div>
                <div className="row">
                  <div className="title">Hệ dẫn động</div>
                  <div className="text">Cầu trước</div>
                </div>
                <div className="row">
                  <div className="title">Momen xoắn</div>
                  <div className="text">141/4000</div>
                </div>
                <div className="row">
                  <div className="title">Động cơ</div>
                  <div className="text">MIVEC 1.5</div>
                </div>
                <div className="row">
                  <div className="title">Mã lực</div>
                  <div className="text">77/6000</div>
                </div>
                <div className="row">
                  <div className="title">Năng lượng</div>
                  <div className="text">Xăng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
