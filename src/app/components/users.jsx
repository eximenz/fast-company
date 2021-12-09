import React from 'react';
// import User from '../user';

const Users = ({users, ...rest}) => {

  const columnNames = ["Имя", "Качества", "Профессия", "Встретился,раз", "Оценка", ""];

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
            onClick={()=>rest.onHandleDelete(user)}
          >
            delete
          </button>
        </td>
      </tr>
    ))
  };

  return (
    <>
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