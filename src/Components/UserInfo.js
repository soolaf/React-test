import React from 'react';
const userInfo = ({ users, getUserInfo }) => {
  console.log(Array.isArray(users));
  return (
    <div>
      {users.map((user, i) => (
        <ul className="user-list">
          <li className="user-names">
            <a href="/#" key={i} onClick={() => getUserInfo(i)}>
              {user.name}
              {user.surname}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default userInfo;
