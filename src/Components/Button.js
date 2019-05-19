import React from 'react';

const gitUser = ({ getUsers }) => (
  <div className="header">
    {' '}
    <button onClick={getUsers}>Get Users!</button>
  </div>
);
export default gitUser;
