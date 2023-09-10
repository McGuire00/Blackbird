import "./ImageCard.css";

function ImageCard({ imageUrl, name, position }) {
  return (
    <div className="image-card">
      {test}
      <img src={imageUrl} alt={name}></img>
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  );
}

export default ImageCard;
