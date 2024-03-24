import React, { useState } from "react";
import data from "./data";

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
      <div className="Accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {selected === dataItem.id ? (
                  <div className="answer">{dataItem.answer}</div>
                ) : null}
              </div>
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
