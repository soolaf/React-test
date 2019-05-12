import React from 'react';

export default function User({ User, clickUser, stateUser }) {
  return (
    <div>
      <h2 onClick={() => clickUser(User.name)}>{User.name}</h2>
    </div>
  );
}
