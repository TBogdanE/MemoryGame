export default function Card({ id, name, image }) {
  return (
    <div className="gameboard-card">
      <div className="gameboard-card-image-container">
        <img src={image} className="gameboard-card-image"></img>
      </div>
      <div className="gameboard-card-name">{name}</div>
    </div>
  );
}
