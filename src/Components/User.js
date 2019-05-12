import React from 'react';

export default function User({ mappedUser, clickUser, stateUser }) {
  return (
    <div>
      <h2 onClick={() => clickUser(mappedUser.name)}>{mappedUser.name}</h2>
    </div>
  );
}
