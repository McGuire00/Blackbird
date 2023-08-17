import { useState } from "react";

import "./Congress.css";

import CongressSideBar from "../CongressSideBar/CongressSideBar";
import PoliticianList from "../PoliticianList/PoliticianList";
// import senators from "../../util/118th_congress_senators.json";
// import representatives from "../../util/118th_congress_reps.json";
function Congress() {
  // TODO MAKE THIS FUNCTIONAL

  const people = {
    members: [
      {
        position: "Senator",
        name: "Tammy Baldwin",
        state: "Wisconsin",
        party: "Democratic",
        image: "Tammy_Baldwin.jpg",
      },
      {
        position: "Senator",
        name: "John Barrasso",
        state: "Wyoming",
        party: "Republican",
        image: "John_Barrasso.jpg",
      },
      {
        position: "Senator",
        name: "Michael F. Bennet",
        state: "Colorado",
        party: "Democratic",
        image: "Michael F._Bennet.jpg",
      },
      {
        position: "Senator",
        name: "Marsha Blackburn",
        state: "Tennessee",
        party: "Republican",
        image: "Marsha_Blackburn.jpg",
      },
      {
        position: "Senator",
        name: "Richard Blumenthal",
        state: "Connecticut",
        party: "Democratic",
        image: "Richard_Blumenthal.jpg",
      },
      {
        position: "Senator",
        name: "Tammy Baldwin",
        state: "Wisconsin",
        party: "Democratic",
        image: "Tammy_Baldwin.jpg",
      },
      {
        position: "Senator",
        name: "John Barrasso",
        state: "Wyoming",
        party: "Republican",
        image: "John_Barrasso.jpg",
      },
      {
        position: "Senator",
        name: "Michael F. Bennet",
        state: "Colorado",
        party: "Democratic",
        image: "Michael F._Bennet.jpg",
      },
      {
        position: "Senator",
        name: "Marsha Blackburn",
        state: "Tennessee",
        party: "Republican",
        image: "Marsha_Blackburn.jpg",
      },
      {
        position: "Senator",
        name: "Richard Blumenthal",
        state: "Connecticut",
        party: "Democratic",
        image: "Richard_Blumenthal.jpg",
      },
    ],
  };

  return (
    <div className="congress">
      <CongressSideBar />
      <PoliticianList people={people} />
    </div>
  );
}

export default Congress;
