import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(prevState=>prevState.filter(user=>user!==userId));
  };

  if (users.length === 0) {
    return <span
    className="badge bg-danger m-2"
    >Никто с тобой не тусанет</span>
  }

  return (
    <>
      <SearchStatus 
        length = {users.length}
      />
      <Users 
        users = {users}
        onHandleDelete = {handleDelete}
      />
    </>
  );
};

export default App;