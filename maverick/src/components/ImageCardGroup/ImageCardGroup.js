import "./ImageCardGroup.css"


import ImageCard from "../ImageCard/ImageCard";
function ImageCardGroup({cabinetMembers}) {
  return (
    <div className="image-card-container">
      {cabinetMembers.cabinet.map((member, index) => {
        const image = require(`../../assets/${member[index].image}`);
        return ( <ImageCard
            key={index}
            imageUrl={image}
            name={member[index].name}
            position={member[index].position}
        />)
      })}
    </div>
  );
}

export default ImageCardGroup;