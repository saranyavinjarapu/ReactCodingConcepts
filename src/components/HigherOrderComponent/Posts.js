import React from "react";
import HigherOrder from "./HigherOrder";

const Posts = ({ data }) => {
  return (
    <div className="flex flex-col p-4 gap-4 border-2 border-yellow-500 rounded-sm">
      <h1 className="text-2xl">POSTS COMPONENT</h1>
      <div className="border-2 border-cyan-500 rounded-sm p-2">
        {data.slice(0, 10).map((post, index) => (
          <p key={index}>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

const PostsComp = HigherOrder(Posts, "posts");

export default PostsComp;
