import React from 'react';
import './App.css';
import Button from './Components/Button';
import UserInfo from './Components/UserInfo';
import SelectUser from './Components/User';

class App extends React.Component {
  state = {
    users: [],
    userId: -1,
  };

  getUsersData = () => {
    fetch('http://uinames.com/api/?amount=5&ext')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  };

  getUser = i => {
    console.log(i);
    this.setState({ userId: i });
  };

  render() {
    return (
      <React.Fragment>
        <Button getUsers={this.getUsersData} />

        <div className="list">
          <UserInfo users={this.state.users} getUserInfo={this.getUser} />

          <SelectUser userId={this.state.userId} users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
