import React from 'react';
import User from './user';

const Users = ({users, ...rest}) => {

  const columnNames = ["Имя", "Качества", "Профессия", "Встретился,раз", "Оценка", "Избранное", ""];

  const renderColumnNames = () => {
    return columnNames.map((columnNames) => (
      <th
        key={columnNames}
      >
        {columnNames}
      </th>
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
          {users.map((user) => (
            <tr
              key={user._id} 
            >
              <User 
                {...user}
              />
              <td>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={()=>rest.onHandleDelete(user)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;