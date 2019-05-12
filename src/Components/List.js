import React from 'react';

import FullName from './Name';

const List = ({ name, surname, gender, region, button }) => {
  return (
    <div className="list">
      <ul>
        <li>
          <FullName name={name} surname={surname} />
        </li>
      </ul>
    </div>
  );
};

export default List;
