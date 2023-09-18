export default function B2c2() {
  const onAnchorClick = (e) => {
    e.preventDefault();
    window.location.href = "https://contents.gongsacok.com/m2hamburger";
  };

  return (
    <div className="commonBox">
      <header className="centerWrap">
        {/* <img
          src="../assets/imgs/banner_b2c2_img4.png"
          alt="온라인 업체등록 하는 방법"
          style={{ width: "24px", height: "16px", marginTop: "1px" }}
        /> */}
        <div>
          <h2>- 회원 가입, 쉽게 하는 방법 -</h2>
        </div>
      </header>
      <div className="commonContainer">
        <ul className="contentsWrap">
          <li className="thinContntsPiece">
            <img
              src="../assets/imgs/banner_b2c2_img1.png"
              alt="아이콘"
              style={{ borderRadius: "15px" }}
            />
          </li>
          <li className="thinContntsPiece">
            <div className="iconWrap">
              <div className="iconWrap-iconPart">
                <img
                  src="../assets/imgs/banner_b2c2_img2.png"
                  alt="고객 정보 수정"
                />
                <span>고객 정보 수정</span>
              </div>
              <div className="iconWrap-textPart">
                <span>사용자 고객은</span>
                <span>고객 정보수정 페이지</span>
                <span>아이콘 클릭 후 등록</span>
              </div>
            </div>

            <div className="iconWrap">
              <div className="iconWrap-iconPart">
                <img
                  src="../assets/imgs/banner_b2c2_img3.png"
                  alt="사업자 정보 수정"
                />
                <span>사업자 정보 수정</span>
              </div>
              <div className="iconWrap-textPart">
                <span>사업자 고객은</span>
                <span>사업자 정보수정 페이지</span>
                <span>아이콘 클릭 후 등록</span>
              </div>
            </div>
            <div className="buttonWrap">
              <button
                style={{ borderColor: "#44a801" }}
                onClick={onAnchorClick}
              >
                연결하기
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
