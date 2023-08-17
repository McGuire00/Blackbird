import "./Politician.css";

function Politician({ position, name, state, party, district, imageUrl }) {
  return (
    <div className="politician-card">
      <img className="politician-image" src={imageUrl} alt={name}></img>
      <h4>{name}</h4>
      <p>{position}</p>
      <p>{state}</p>
      <p>{party}</p>
      {/*<p>{district}</p>*/}
    </div>
  );
}

export default Politician;
