import "./CongressSideBar.css";

import Accordion from "../Accordion/Accordion";
import { useState } from "react";
function CongressSideBar({ setFilterOptions }) {
  const filterData = [
    {
      title: "Congress",
      label: "Congress",
      options: [
        "118th Congress (2023-2024)",
        "117th Congress (2021-2022)",
        "116th Congress (2019-2020)",
      ],
    },
    {
      title: "Chamber",
      label: "Chamber",
      options: ["House", "Senate"],
    },
    {
      title: "Party",
      label: "Party",
      options: ["Democratic", "Republican"],
    },
    {
      title: "State",
      label: "Members by US State or Territory",
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
        return (
          <Accordion filters={filter} setFilterOptions={setFilterOptions} />
        );
      })}
    </div>
  );
}

export default CongressSideBar;
