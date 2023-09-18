export default function PrivacyPiece({
  title,
  content,
  tabel,
  PrivacyPieceNoneTitle,
}) {
  return (
    <div className="privacyPiece">
      <h5>{title}</h5>

      {content &&
        content.map((res, i) => {
          return <div key={i}>{res}</div>;
        })}

      {tabel}

      {PrivacyPieceNoneTitle &&
        PrivacyPieceNoneTitle.map((res, i) => {
          return <div key={i}>{res}</div>;
        })}
    </div>
  );
}
