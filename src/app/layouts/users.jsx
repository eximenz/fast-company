import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage/userPage";

const Users = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

Users.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Users;
