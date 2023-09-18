export default function PrivacyPieceTabel6() {
  return (
    <table>
      <caption>개인정보 수탁 및 위탁 항목</caption>
      <thead>
        <tr>
          <th style={{ width: "33.333%" }}>위탁 업무 내용</th>
          <th style={{ width: "33.333%" }}>수탁 업체</th>
          <th style={{ width: "33.333%" }}>개인정보의 보유 및 이용기간</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>휴대폰 본인인증</td>
          <td>(주)NICE 평가정보</td>
          <td>목적 달성 시 즉시 파기</td>
        </tr>

        <tr>
          <td>안심번호 서비스</td>
          <td>(주)세종텔레콤</td>
          <td rowSpan="2" align="center">
            회원탈퇴 및 수집 목적 달성 시 까지단, 관계법령의 규정에 따라 보존할
            필요가 있는 경우를 제외하고 목적 달성 시 지체없이 파기
          </td>
        </tr>

        <tr>
          <td>데이터 보관 및 처리 등 국내 클라우드 서버운영 및 관리</td>
          <td>Amazon Web Services Inc</td>
        </tr>
      </tbody>
    </table>
  );
}
