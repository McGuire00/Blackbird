import { useState } from "react";
import "./Accordion.css";

function Accordion({ filters, setFilterOptions }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  function renderAccordion() {
    if (filters.options) {
      return filters.options.map((option, index) => {
        return (
          <div className="list-item" key={index}>
            <label key={index}>
              <input
                type="checkbox"
                value={option}
                checked={selectedFilters.includes(option)}
                onChange={(e) => handleFilterChange(e, option)}
              />
              {option}
            </label>
          </div>
        );
      });
    }
  }
  const handleFilterChange = (e, option) => {
    const selectedOption = option;
    const updatedFilters = e.target.checked
      ? [...selectedFilters, selectedOption]
      : selectedFilters.filter((filter) => filter !== selectedOption);

    setSelectedFilters(updatedFilters);

    // Update filter options in the parent component using the updatedFilters value
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      [filters.title]: updatedFilters,
    }));
  };
  return (
    <div className="accordion-container">
      <div className="accordion">
        <div
          className="accordion-title"
          onClick={() => setIsVisible(!isVisible)}
        >
          {filters.label}
        </div>
      </div>
      <div className={`content ${isVisible ? "show-content" : ""}`}>
        {renderAccordion()}
      </div>
    </div>
  );
}

export default Accordion;
