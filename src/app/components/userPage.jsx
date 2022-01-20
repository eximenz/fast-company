import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const UserPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();

  const handleAllUsers = () => {
    history.replace("/users");
  };

  useEffect(() => {
    api.users.getBy(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    return (
      <>
        <h1>{userInfo.name}</h1>
        <div>Професcия: {userInfo.profession.name}</div>
        <div>
          {userInfo.qualities.map((quality) => (
            <Qualitie key={quality._id} {...quality} />
          ))}
        </div>
        <div>Завершенных встреч: {userInfo.completedMeetings}</div>
        <div>Рейтинг: {userInfo.rate}</div>
        <button
          onClick={() => {
            handleAllUsers();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }

  return "loading...";
};

UserPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserPage;
