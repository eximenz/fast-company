import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark";
import Table from "../common/table";
import QualitiesList from "./qualities/qualitiesList";
import Proffesion from "./profession";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList userQualities={user.qualities} />,
    },
    professions: {
      name: "Профессия",
      component: (user) => <Proffesion id={user.profession} />,
    },
    completedMeetings: {
      path: "completedMeetings",
      name: "Встретился, раз",
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      ),
    },
  };

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserTable;
