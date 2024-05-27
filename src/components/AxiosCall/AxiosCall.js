import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosCall = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  //GET Users from API on initial load, hence placed the fn in useEffect([])
  const getUsers = () => {
    axios
      .get("https://665458aa1c6af63f46778085.mockapi.io/users")
      .then((response) => response.data)
      .then((data) => setUsers(data))
      .catch("Error");
  };

  //POST User to API, send "name" value as params
  const postUser = () => {
    axios
      .post("https://665458aa1c6af63f46778085.mockapi.io/users", { name: name })
      .then((response) => {
        console.log(response.statusText);
        return response.data;
      })
      .then((data) => {
        setName("");
        console.log(data);
      })
      .catch("Error");
  };

  //Update/patch User to API Data
  const updateUser = (id) => {
    axios
      .put(`https://665458aa1c6af63f46778085.mockapi.io/users/${id}`, {
        name: name ? name : "test",
      })
      .then((response) => {
        console.log(response.statusText);
        return response.data;
      })
      .then((data) => {
        data && console.log(data);
      })
      .catch("Error");
  };

  //Delete User from API
  const deleteUser = (id) => {
    axios
      .delete(`https://665458aa1c6af63f46778085.mockapi.io/users/${id}`)
      .then((response) => {
        console.log(response.statusText);
        return response.data;
      })
      .then((data) => {
        data && console.log(data);
      })
      .catch("Error");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="flex gap-4 justify-center items-center mb-4 p-8">
        <label className=" text-xl font-bold">Enter Name</label>
        <input
          className="border border-gray-500 rounded-md px-4 py-1"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="border rounded-md bg-lime-200 " onClick={postUser}>
          Add Data
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 m-4">
        {users.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col border gap-6 p-4 border-gray-500"
            >
              <h1 className="text-xl">
                {item.id}. {item.name}
              </h1>
              <div className="flex gap-4 justify-center">
                <button
                  className="border rounded-md bg-lime-200 "
                  onClick={() => updateUser(item.id)}
                >
                  UPDATE
                </button>
                <button
                  className="border rounded-md bg-lime-200 "
                  onClick={() => deleteUser(item.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AxiosCall;
