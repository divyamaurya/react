import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = ({ username }) => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <h1>Welcome {user.username}</h1>;
};

export default Profile;
