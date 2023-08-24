import "./PoliticianList.css";

import Politician from "../Politician/Politician";
function PoliticianList({ people, filterOptions }) {
  const filteredMembers = filterMembers(people.members, filterOptions);
  // Function to filter members based on filterOptions
  function filterMembers(members, filterOptions) {
    if (filterOptions.Party && filterOptions.Party.length > 0) {
      return members.filter((member) =>
        filterOptions.Party.includes(member.party),
      );
    } else if (filterOptions.State && filterOptions.State.length > 0) {
      return members.filter((member) =>
        filterOptions.State.includes(member.state),
      );
    } else if (filterOptions.Chamber && filterOptions.Chamber.length > 0) {
      return members.filter((member) =>
        filterOptions.Chamber.includes(member.chamber),
      );
    }

    // If no filters are selected, return all members
    return members;
  }

  if (filteredMembers.length === 0) {
    return (
      <div className="no-results">
        No results found for the selected filters.
      </div>
    );
  }

  return (
    <div className="member-list-container" data-testid="politician-list">
      {filteredMembers.map((member, index) => {
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
