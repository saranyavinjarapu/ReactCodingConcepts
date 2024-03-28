import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (currentDataItemSelectedId) => {
    /*currentDataItemSelectedId === selected ? null : currentDataItemSelectedId to make the content disappear 
    when we reclick on the same header or else it would do nothing when we reclick on the already answer showing title*/
    setSelected(
      currentDataItemSelectedId === selected ? null : currentDataItemSelectedId
    );
  };

  const handleMultiSelection = (currentDataItemSelectedId) => {
    /* the way multi selection should work is, as we keep selecting multiple
  items, all of them should be opened and displayed except for when one item 
  is reclicked, which then means, it should be closed and other ones would still
  be open, for that reason, we need to add all the opened items to
  multiple array*/
    /* as mentioned above we need to add the multiple selected items
  to the multiple state element we created above so we can display them 
  all as open but "multiple" here is a state element and hence we do not want
  to mutate the state variable hence make a copy of multiple as seen below
  */
    let cpyMultiple = [...multiple];

    //check if the clicked index is aleady present in the array, if so, we need to close that particular item
    const finIndexOfCurrentId = cpyMultiple.indexOf(currentDataItemSelectedId);

    /* so find out if index already exists, if index does not exist, 
    then it is -1 as shown below and then we will push it to the array for the item to be open
    and the else would be where the index already exists and in that case, it means the item
    is reclicked and hence we need to close the item, which means we need to slice it from the
    array, thats why we sliced 1 item at given index*/

    if (finIndexOfCurrentId === -1) cpyMultiple.push(currentDataItemSelectedId);
    else cpyMultiple.splice(finIndexOfCurrentId, 1);

    //finally set the multiple with newly updated array
    setMultiple(cpyMultiple);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
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
