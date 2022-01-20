import React from "react";
import UserPage from "./userPage";
import Users from "./users";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const UserList = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage id={userId} /> : <Users />}</>;
};

UserList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default UserList;
