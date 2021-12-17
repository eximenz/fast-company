import React, { useState, useEffect } from 'react';
import Users from './components/users';
import api from './api';

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users
      .fetchAll()
      .then((data) =>
        setUsers(
          data
        )
      );
  }, []);

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };

  const handleToggleBookMark = (id) => {
    const toggleBookMarkArray = users.map((user) => {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
      }
      return user;
    });

    setUsers(toggleBookMarkArray);
  };

  return (
    <>
    {users && (<Users
        users={users}
        onHandleDelete={handleDelete}
        onToggle={handleToggleBookMark}
      />)}
    </>
  );
};

export default App;
