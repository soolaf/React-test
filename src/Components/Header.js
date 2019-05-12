import React from 'react';
const Button = props => {
  return (
    <div>
      <button onClick={props.fetchUsers}>Git User!</button>
    </div>
  );
};
export default Button;
