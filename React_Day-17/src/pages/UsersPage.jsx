import React, { useEffect } from "react";
import { useAuthHook } from "../hooks/useAuthHook";
import { axiosInstance } from "../config/ApiCalls";
import UserCard from "../components/UsersCard";

const UsersPage = () => {
  const { usersData, setUsersData } = useAuthHook();

  const getUsersData = async () => {
    const { data } = await axiosInstance.get("/users");
    setUsersData(data);
  };

  useEffect(() => {
    getUsersData()
  } , [])

  return (
    <div className="grid grid-cols-3 gap-1">
      {usersData.map((data) => {
        return <UserCard key={data.id} users={data} />
      })}
    </div>
  );
};

export default UsersPage;
