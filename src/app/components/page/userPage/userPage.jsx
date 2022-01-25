import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import Qualitie from "../../ui/qualities/qualitie";
import { Link } from "react-router-dom";

const UserPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    console.log(userInfo);

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
        <Link to={`/users/${userInfo._id}/edit`}>
          <button className="btn btn-primary">Изменить</button>
        </Link>
      </>
    );
  }

  return "loading...";
};

UserPage.propTypes = {
  id: PropTypes.string,
};

export default UserPage;
