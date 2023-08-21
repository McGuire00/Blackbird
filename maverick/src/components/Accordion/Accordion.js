import { useState } from "react";
import "./Accordion.css";

function Accordion({ filters }) {
  const [isVisible, setIsVisible] = useState(false);
  function renderAccordion() {
    if (filters.options) {
      return filters.options.map((option, index) => {
        return (
          <div className="list-item" key={index}>
            <p>{option}</p>
          </div>
        );
      });
    }
  }

  return (
    <div className="accordion-container">
      <div className="accordion">
        <div
          className="accordion-title"
          onClick={() => setIsVisible(!isVisible)}
        >
          {filters.title}
        </div>
      </div>
      <div className={`content ${isVisible ? "show-content" : ""}`}>
        {renderAccordion()}
      </div>
    </div>
  );
}

export default Accordion;
