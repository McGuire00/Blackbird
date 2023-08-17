import "./PoliticianList.css";

import Politician from "../Politician/Politician";
function PoliticianList({ people }) {
  return (
    <div className="member-list-container">
      {people.members.map((member, index) => {
        const image = require(`../../assets/congress_sessions/118th_congress/senators/${member.image}`);
        return (
          <div key={index} className="member-item">
            <Politician
              key={index}
              position={member.position}
              name={member.name}
              state={member.state}
              party={member.party}
              imageUrl={image}
              district={member.district}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PoliticianList;
