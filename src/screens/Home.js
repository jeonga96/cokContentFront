import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <h1>공사콕 콘텐츠 메인 페이지</h1>
      <div>
        <Link to="/">기본 홈</Link>
        <Link to="/grandopen">오픈 예정</Link>
        <Link to="/test">test</Link>
      </div>
      <div>
        <h2>이벤트 리스트</h2>
        <div>
          <Link to="/eventprice">이벤트 가격</Link>
        </div>
      </div>
      <div>
        <div>
          <h2>B2C 배너 리스트</h2>
          <Link to="/b2c1">B2C첫번째 배너</Link>
          <Link to="/b2c2">B2C두번째 배너</Link>
          <Link to="/b2c3">B2C세번째 배너</Link>
        </div>
        <div>
          <h2>B2B 배너 리스트</h2>
          <Link to="/b2b1">B2B첫번째 배너</Link>
          <Link to="/b2b2">B2B두번째 배너</Link>
          <Link to="/b2b3">B2B세번째 배너</Link>
        </div>
      </div>
      <div>
        <Link to="/privacy">개인정보처리방침</Link>
        <Link to="/terms">이용약관</Link>
      </div>
    </div>
  );
}
