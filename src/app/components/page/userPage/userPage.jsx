import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

const UserPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    console.log(userInfo);
    return (
      <>
        <div className="container">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserCard user={userInfo} />
              <QualitiesCard data={userInfo.qualities} />
              <MeetingsCard value={userInfo.completedMeetings} />
            </div>
            <div className="col-md-8">
              <Comments />
            </div>
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
