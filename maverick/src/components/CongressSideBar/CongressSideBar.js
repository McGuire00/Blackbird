import "./CongressSideBar.css";

import Accordion from "../Accordion/Accordion";
import { useState } from "react";
function CongressSideBar() {
  const filterData = [
    {
      title: "Congress",
      options: ["118th Congress", "117th Congress", "116th Congress"],
    },
    {
      title: "Chamber",
      options: ["House", "Senate"],
    },
    {
      title: "Party",
      options: ["House", "Senate"],
    },
    {
      title: "Members by US State or Territory",
      options: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    },
  ];
  return (
    <div className="sidebar">
      {filterData.map((filter, index) => {
        return <Accordion filters={filter} />;
      })}
    </div>
  );
}

export default CongressSideBar;
