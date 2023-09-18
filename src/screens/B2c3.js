export default function B2c3() {
  const onAnchorClick = (e) => {
    e.preventDefault();
    window.location.href = "https://contents.gongsacok.com/m2proposallist";
  };

  return (
    <div className="commonBox">
      <header className="centerWrap">
        {/* <img
          src="../assets/imgs/banner_b2c3_img4.png"
          alt="서류 아이콘"
          style={{ width: "23px", height: "20px" }}
        /> */}
        <div>
          <h2>- 견적 의뢰서 작성 &amp; 견적서 받는 방법 -</h2>
        </div>
      </header>
      <div className="commonContainer">
        <ul className="contentsWrap">
          <li className="thinContntsPiece">
            <img
              src="../assets/imgs/banner_b2c3_img1.png"
              alt="건축시공에 대해 고민하는 일러스트"
              style={{ borderRadius: "15px" }}
            />
          </li>
          <li className="thinContntsPiece">
            <div className="iconWrap">
              <div
                className="iconWrap-iconPart iconWrap-iconPartWide"
                style={{ paddingBottom: "0.3125rem" }}
              >
                <img
                  src="../assets/imgs/banner_b2c3_img2.png"
                  alt="견적공유 아이콘"
                />
                <span>견적 공유</span>
              </div>
              <div className="iconWrap-textPart iconWrap-textPartWide">
                <span>
                  사용자 고객은{" "}
                  <span className="color_green_text">견적의뢰서 작성 시</span>
                </span>
                <span>
                  {" "}
                  <span className="color_green_text">
                    사업자 정보 페이지
                  </span>{" "}
                  접속 후
                </span>
                <span>
                  우측 상단에 있는
                  <div>
                    <img
                      src="../assets/imgs/banner_b2c3_img2.png"
                      alt="견적의뢰서 아이콘"
                    />
                  </div>
                  <span className="color_green_text">아이콘 클릭</span>
                </span>
              </div>
            </div>

            <div className="iconWrap">
              <div
                className="iconWrap-iconPart iconWrap-iconPartWide"
                style={{ paddingBottom: "0.3125rem" }}
              >
                <img
                  src="../assets/imgs/banner_b2c3_img3.png"
                  alt="내 견적서 아이콘"
                />
                <span>내 견적서</span>
              </div>
              <div className="iconWrap-textPart iconWrap-textPartWide">
                <span>
                  <span className="color_red_text">견적서 도착 현황</span> 및
                </span>
                <span>
                  <span className="color_red_text">견적 의뢰서 발송 현황</span>
                  은
                </span>
                <span>
                  <span className="color_red_text">
                    내 견적서
                    <div>
                      <img
                        src="../assets/imgs/banner_b2c3_img3.png"
                        alt="내 견적서 아이콘"
                      />
                    </div>
                    아이콘 클릭
                  </span>{" "}
                  후 확인
                </span>
              </div>
            </div>
            <div className="buttonWrap">
              <button
                style={{ borderColor: "#52ac00" }}
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
