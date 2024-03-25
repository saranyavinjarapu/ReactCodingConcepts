import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (currentDataItemSelectedId) => {
    /*currentDataItemSelectedId === selected ? null : currentDataItemSelectedId to make the content disappear 
    when we reclick on the same header or else it would do nothing when we reclick on the already answer showing title*/
    setSelected(
      currentDataItemSelectedId === selected ? null : currentDataItemSelectedId
    );
  };
  return (
    <div className="wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
