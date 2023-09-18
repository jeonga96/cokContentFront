export default function B2b3() {
  const onAnchorClick = (e) => {
    e.preventDefault();
    window.location.href = "https://contents.gongsacok.com/m2companyedit";
  };

  return (
    <div className="commonBox">
      <header className="centerWrap">
        <img
          src="../assets/imgs/banner_b2b3_img3.png"
          alt="온라인 업체등록 하는 방법 아이콘"
          style={{ width: "22px", height: "20px" }}
        />
        <div>
          <h2>온라인 업체등록 하는 방법</h2>
        </div>
      </header>
      <div className="commonContainer">
        <ul className="contentsWrap">
          <li className="thinContntsPiece" style={{ borderColor: "#b53bfd" }}>
            <img
              src="../assets/imgs/banner_b2b3_img1.png"
              alt="공사장 일러스트"
            />
          </li>
          <li className="thinContntsPiece" style={{ borderColor: "#b53bfd" }}>
            <div className="iconWrap">
              <div className="iconWrap-iconPart">
                <img
                  src="../assets/imgs/banner_b2b3_img2.png"
                  alt="메뉴 아이콘"
                />
                <span>메 뉴</span>
              </div>
              <div className="iconWrap-textPart">
                <span>오른쪽 상단 위</span>
                <span>
                  <span className="color_purple_text">메뉴 </span>
                  아이콘 <span className="color_purple_text">클릭</span>
                </span>
              </div>
            </div>

            <div className="iconWrap">
              <div className="iconWrap-iconPart">
                <img
                  src="../assets/imgs/banner_b2c2_img3.png"
                  alt="사업자 정보수정 아이콘"
                  style={{ width: "70px", height: "70px" }}
                />
                <span>사업자 정보수정</span>
              </div>
              <div className="iconWrap-textPart">
                <span className="color_purple_text">사업자 정보 수정</span>
                <span>
                  <span className="color_purple_text">아이콘 클릭 </span>후{" "}
                  <span className="color_purple_text">업체 등록</span>
                </span>
              </div>
            </div>
            <div className="buttonWrap">
              <button
                style={{ borderColor: "#f3a91a" }}
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
