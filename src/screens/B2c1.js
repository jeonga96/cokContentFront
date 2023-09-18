export default function B2c1() {
  return (
    <div className="commonBox">
      <header className="centerWrap">
        {/* <img
          src="../assets/imgs/banner_b2c1_img1.png"
          alt="자재 등 최저가 확인"
        /> */}
        <div>
          <h2>- 회원 가입 시 드리는 특전 -</h2>
        </div>
      </header>
      <div className="commonContainer">
        <ul className="contentsWrap">
          <li style={{ marginTop: "10px" }}>
            <h3 className="font_content3">
              ( 1 ) 견적의뢰서 발송 및 견적서 받기 혜택
            </h3>
            <img
              src="../assets/imgs/banner_b2c1_img2.png"
              alt="준비중입니다"
              className="thinContntsPiece"
              style={{ borderRadius: "5px", width: "100%" }}
            />
          </li>
          <li style={{ marginTop: "20px" }}>
            <h3 className="font_content3">( 2 ) 문화생활 할인권 혜택</h3>
            <img
              src="../assets/imgs/banner_b2c1_img3.png"
              alt="준비중입니다"
              className="thinContntsPiece"
              style={{
                borderRadius: "5px",
                width: "100%",
                paddingTop: "15px",
                paddingBottom: "5px",
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
