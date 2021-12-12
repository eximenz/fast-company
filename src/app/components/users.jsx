import React, { useState } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';
import PropTypes from 'prop-types';

const Users = ({ users, onHandleDelete, onToggle }) => {
  const columnNames = [
    'Имя',
    'Качества',
    'Профессия',
    'Встретился,раз',
    'Оценка',
    'Избранное',
    ''
  ];

  const renderColumnNames = () => {
    return columnNames.map((columnNames) => (
      <th key={columnNames}>{columnNames}</th>
    ));
  };

  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // const paginate = (items, pageNumber, pageSize) =>  {
  //   const stsrtIndex = (pageNumber - 1) * pageSize;
  //   return [...items].splice(stsrtIndex, pageSize)
  // }

  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      <table className='table'>
        <thead>
          <tr>{renderColumnNames()}</tr>
        </thead>
        <tbody>
          {userCrop.map((user) => (
            <tr key={user._id}>
              <User {...user} onToggle={onToggle} />
              <td>
                <button
                  className='btn btn-danger btn-sm m-2'
                  onClick={() => onHandleDelete(user)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  onHandleDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
