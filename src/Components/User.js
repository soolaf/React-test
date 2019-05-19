import React from 'react';

const selectUser = ({ userId, users }) => {
  if (userId >= 0) {
    const user = users[userId];

    return (
      <div className="info">
        <img className="user-img" src={user.photo} alt="user-img" />
        <div className="user-info">
          <h3>{user.name + ' ' + user.surname}</h3>
          <ul>
            <li> Email: {user.email}</li>
            <li> Gender: {user.gender}</li>
            <li> Age: {user.age}</li>
            <li> Country of origin: {user.region} </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default selectUser;
