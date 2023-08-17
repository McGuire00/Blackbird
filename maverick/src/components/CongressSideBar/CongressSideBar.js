import "./CongressSideBar.css";

function CongressSideBar() {
  return (
    <div className="sidebar">
      <h2>Filter Members</h2>
      <label htmlFor="party-filter">Party:</label>
      {/*<select*/}
      {/*  id="party-filter"*/}
      {/*  value={filterParty}*/}
      {/*  onChange={handleFilterChange}*/}
      {/*>*/}
      <option value="All">All</option>
      <option value="Democratic">Democratic</option>
      <option value="Republican">Republican</option>
      {/*</select>*/}
    </div>
  );
}

export default CongressSideBar;
