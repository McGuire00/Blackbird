import { useState } from "react";

import "./Congress.css";

import CongressSideBar from "../CongressSideBar/CongressSideBar";
import PoliticianList from "../PoliticianList/PoliticianList";
// import senators from "../../util/118th_congress_senators.json";
// import representatives from "../../util/118th_congress_reps.json";
function Congress() {
  // TODO MAKE THIS FUNCTIONAL BY WORKING WITH STATIC DATA FIRST
  // THEN CONNECTING TO DJANGO BACKEND

  const [filterOptions, setFilterOptions] = useState({});

  const people = {
    members: [
      {
        position: "Senator",
        name: "Tammy Baldwin",
        state: "Wisconsin",
        party: "Democratic",
        image: "Tammy_Baldwin.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "John Barrasso",
        state: "Wyoming",
        party: "Republican",
        image: "John_Barrasso.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Michael F. Bennet",
        state: "Colorado",
        party: "Democratic",
        image: "Michael F._Bennet.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Marsha Blackburn",
        state: "Tennessee",
        party: "Republican",
        image: "Marsha_Blackburn.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Richard Blumenthal",
        state: "Connecticut",
        party: "Democratic",
        image: "Richard_Blumenthal.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Tammy Baldwin",
        state: "Wisconsin",
        party: "Democratic",
        image: "Tammy_Baldwin.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "John Barrasso",
        state: "Wyoming",
        party: "Republican",
        image: "John_Barrasso.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Michael F. Bennet",
        state: "Colorado",
        party: "Democratic",
        image: "Michael F._Bennet.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Marsha Blackburn",
        state: "Tennessee",
        party: "Republican",
        image: "Marsha_Blackburn.jpg",
        chamber: "Senate",
      },
      {
        position: "Senator",
        name: "Richard Blumenthal",
        state: "Connecticut",
        party: "Democratic",
        image: "Richard_Blumenthal.jpg",
        chamber: "Senate",
      },
    ],
  };

  return (
    <div className="congress">
      <CongressSideBar setFilterOptions={setFilterOptions} />
      <PoliticianList people={people} filterOptions={filterOptions} />
    </div>
  );
}

export default Congress;
