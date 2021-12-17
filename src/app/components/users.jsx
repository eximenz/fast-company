import React, { useState, useEffect } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';
import api from '../api';
import PropTypes from 'prop-types';
import GroupList from './groupList';
import SearchStatus from './searchStatus';

const Users = ({ users: allUsers, onHandleDelete, onToggle }) => {
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

  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    api.professions
      .fetchAll()
      .then((data) =>
        setProfession(
          data
        )
      );
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = item => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession === selectedProf)
    : allUsers;
  const count = filteredUsers.length;

  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className='d-flex'>
      {professions && allUsers.length > 0 && (
        <div className='d-flex flex-column flex-shrink-0 p-3'>
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button
            className='btn btn-secondary mt-2'
            onClick={clearFilter}
          >
            Очистить
          </button>
        </div>
      )}
      <div className='d-flex flex-column'>
        <SearchStatus length={count} />
        {count > 0 && (
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
        )}
        <div className='d-flex justify-content-center'>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  onHandleDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
