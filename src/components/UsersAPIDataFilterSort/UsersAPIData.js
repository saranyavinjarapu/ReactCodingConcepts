import React, { useEffect, useState } from "react";

const UsersAPIData = () => {
  const [users, setUsers] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  const getAPIData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJSON = await response.json();
    setUsers(responseJSON);
  };

  const filterAPIData = () => {
    //BELOW LOGIC returns entire item array that satisfies > condition
    setUsers(users.filter((item) => item.id > filterInput));
  };

  const sortDataByName = () => {
    console.log("sort by name");
    const copyUsers = [...users];

    //sort string properties
    let sortByName = copyUsers.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setUsers(sortByName);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="flex justify-center items-center gap-4 px-6 py-2 bg-red-100 border rounded-md">
        <label className=" text-lg font-medium">
          Filter By Id: Id Greater than{" "}
        </label>
        <input
          type="number"
          className="border border-gray-500 rounded-md p-2"
          id="filterInput"
          value={filterInput}
          onChange={(e) => setFilterInput(parseInt(e.target.value))}
        ></input>
        <button onClick={filterAPIData}>Filter</button>
        <button onClick={sortDataByName}>Sort By Name</button>
      </div>
      <div className="grid grid-cols-5 gap-4 m-4">
        {users &&
          users.map((user, index) => (
            <div
              className="border border-gray-500 rounded-md p-2 gap-4"
              key={index}
            >
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersAPIData;
