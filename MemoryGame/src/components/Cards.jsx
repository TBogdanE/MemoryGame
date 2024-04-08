export default function Card({ id, name, image, onClick }) {
  return (
    <div className="gameboard-card" onClick={onClick}>
      <div className="gameboard-card-image-container">
        <img src={image} className="gameboard-card-image"></img>
      </div>
      <div className="gameboard-card-name">{name}</div>
    </div>
  );
}
