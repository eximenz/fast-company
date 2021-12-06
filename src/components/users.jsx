import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const columnNames = ["Имя", "Качества", "Профессия", "Встретился,раз", "Оценка", ""];

  const handleDelete = (userId) => {
    setUsers(prevState=>prevState.filter(user=>user!==userId));
  };

  const renderPhrase = (number) => {
    let message = (number >=2 && number <=4) ? "человека тусанут" : "человек тусанет";
    
    return `${number} ${message} с тобой сегодня`;
  };

  const renderColumnNames = () => {
    return columnNames.map((columnNames) => (
      <th
        key={columnNames}
      >
        {columnNames}
      </th>
    ))
  };

  const getQualityClasses = (color) => {

    let classes = `badge bg-${color} m-2`;
    return classes;
  };

  const renderUsers = () => {
    return users.map((user) => (
      <tr
        key={user._id}
      >
        <td>
          {user.name}
        </td>
        <td>
          {user.qualities.map((quality) => {
            return <span 
              key={quality._id}
              className={getQualityClasses(quality.color)}
            >
              {quality.name}
            </span>
          })}
        </td>
        <td>
          {user.profession.name}
        </td>
        <td>
          {user.completedMeetings}
        </td>
        <td>
          {user.rate}
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={()=>handleDelete(user)}
          >
            delete
          </button>
        </td>
      </tr>
    ))
  };

  if (users.length === 0) {
    return <span
    className="badge bg-danger m-2"
    >Никто с тобой не тусанет</span>
  }

  return (
    <>
      <span
        className="badge bg-primary m-2"
      >
        {renderPhrase(users.length)}
      </span>
      <table className="table">
        <thead>
          <tr>
            {renderColumnNames()}
          </tr>
        </thead>
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
    </>
  );
};

export default Users;