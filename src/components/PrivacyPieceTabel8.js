export default function PrivacyPieceTabel8() {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "25%" }}>수집하는 행태정보의 항목</th>
          <th style={{ width: "25%" }}>행태정보 수집 방법</th>
          <th style={{ width: "25%" }}>행태정보 수집 목적</th>
          <th style={{ width: "25%" }}>보유/이용기간 및 이후 정보처리 방법</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>이용자의 웹사이트/앱서비스 방문이력, 검색이력</td>
          <td>이용자의 웹사이트 및 앱 방문 / 실행 시 자동 수집</td>
          <td>
            이용자의 관심, 성향에 기반한 개인 맟춤형 추천서비스 ( 광고포함 )를
            제공
          </td>
          <td>수집일로부터 2년 보관 후 삭제</td>
        </tr>
      </tbody>
    </table>
  );
}
