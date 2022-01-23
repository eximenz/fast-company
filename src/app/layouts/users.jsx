import React from "react";
import { useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage/userPage";
import Edit from "../components/page/edit";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      {!userId ? <UsersListPage /> : edit ? <Edit /> : <UserPage id={userId} />}
    </>
  );
};

export default Users;
