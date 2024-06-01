import React from "react";
const DataList = ({ data, setId, setText }) => {
  const jsonDataClickHandler = (item) => {
    setId(item.value.id);
    setText(item.value.text);
  };
  return (
    <div className="flex flex-col gap-4 p-4 m-1 text-left">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <li>
              <button
                className="ml-4 bg-green-200"
                onClick={() => jsonDataClickHandler(item)}
              >
                {item.value.text}
              </button>
            </li>
            {item.children && (
              <DataList data={item.children} setText={setText} setId={setId} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DataList;
