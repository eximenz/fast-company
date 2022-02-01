import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";

const UserPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    return (
      <>
        <div className="contai">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserCard user={userInfo} />
              <QualitiesCard data={userInfo.qualities} />
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </>
    );
  }

  return "loading...";
};

UserPage.propTypes = {
  id: PropTypes.string,
};

export default UserPage;
