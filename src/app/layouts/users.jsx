import React from "react";
import { useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage/userPage";
import Edit from "../components/page/edit";
import UserProvider from "../hooks/useUsers";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      <UserProvider>
        {!userId ? (
          <UsersListPage />
        ) : edit ? (
          <Edit id={userId} />
        ) : (
          <UserPage id={userId} />
        )}
      </UserProvider>
    </>
  );
};

export default Users;
