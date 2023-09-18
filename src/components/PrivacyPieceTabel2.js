export default function PrivacyPieceTabel2() {
  return (
    <table>
      <caption>개인정보 수집 항목</caption>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>구분</th>
          <th style={{ width: "10%" }}>분류</th>
          <th style={{ width: "26.3%" }}>수집 / 이용목적</th>
          <th style={{ width: "26.3%" }}>수집 / 이용항목</th>
          <th style={{ width: "26.3%" }}>보유 / 이용이간</th>
        </tr>
      </thead>

      <tbody>
        {/* 고객유저 ================== */}
        <tr>
          <td rowSpan="3" align="center">
            고객유저
          </td>
          <td rowSpan="3" align="center">
            필수항목
          </td>
          <td>회원가입</td>
          <td>이름, 휴대폰번호</td>
          <td rowSpan="3" align="center">
            회원탈퇴 및 수집 목적 달성 시 까지 단, 관계법령의 규정에 따라 보존할
            필요가 있는 경우를 제외하고 목적 달성 시 지체없이 파기
          </td>
        </tr>
        <tr>
          <td>본인인증</td>
          <td>이름, 휴대폰번호</td>
        </tr>
        <tr>
          <td>견적신청 및 상담</td>
          <td>이름, 휴대폰번호, 견적의뢰서 상의 정보</td>
        </tr>

        {/* 사업자유저 ================== */}
        <tr>
          <td rowSpan="4" align="center">
            사업자 유저
          </td>
          <td rowSpan="4" align="center">
            필수항목
          </td>
          <td>회원가입</td>
          <td>이름, 휴대폰번호, 사업자 정보</td>
          <td rowSpan="4" align="center">
            회원탈퇴 및 수집 목적 달성 시 까지 단, 관계법령의 규정에 따라 보존할
            필요가 있는 경우를 제외하고 목적 달성 시 지체없이 파기
          </td>
        </tr>

        <tr>
          <td>사업자 인증</td>
          <td>사업자등록번호, 사업자등록증사본, 영업장주소, 대표자명</td>
        </tr>

        <tr>
          <td>상품 구매</td>
          <td>이름, 휴대폰번호, 결제정보</td>
        </tr>

        <tr>
          <td>환불(취소)</td>
          <td>계좌번호, 은행명, 예금주</td>
        </tr>

        {/* 공통 - 필수항목 ================== */}
        <tr>
          <td>공통</td>
          <td>필수항목</td>
          <td>푸시알림</td>
          <td>휴대폰번호, 모바일기기 고유번호</td>
          <td>최종 사용일 기준 5년까지 보관</td>
        </tr>

        {/* 공통 - 필수항목 ================== */}
        <tr>
          <td>공통</td>
          <td>선택항목</td>
          <td>이벤트 / 마케팅</td>
          <td>
            경품제공에 필요한 정보, 이외 마케팅 및 광고의 활용에 필요한 이용자에
            대한 정보
          </td>
          <td>
            회원탈퇴 및 수집 목적 달성 시 까지 단, 관계법령의 규정에 따라 보존할
            필요가 있는 경우를 제외하고 목적 달성 시 지체없이 파기
          </td>
        </tr>
      </tbody>
    </table>
  );
}
