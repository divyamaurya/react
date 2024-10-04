import React, { useEffect, useState } from "react";

const GitHub = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/divyamaurya")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="w-full text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub followers: {data.followers}
      </p>
      <img
        className="rounded-full"
        src={data.avatar_url}
        alt="Github Profile Picture"
      />
    </div>
  );
};

export default GitHub;
