import React, { Component } from 'react';
import List from './Components/List';
import Header from './Components/Header';
import User from './Components/User';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      users: {
        name: '',
        region: '',
        gender: '',
      },
    };
  }
  clickUser = name => {
    this.state.users.array.forEach(user => {
      if (user.name === name) {
        this.setState({
          users: {
            img: user.photo,
            gender: user.gender,
            name: user.name,
            region: user.region,
          },
        });
      }
    });
  };

  fetchUsers = () => {
    fetch('http://uinames.com/api/?ext&amount=5')
      .then(res => res.json())
      .then(items =>
        this.setState(
          {
            isLoaded: true,
            items,
          },
          () => console.log(items),
        ),
      );
  };

  //componentDidMount() {

  //}

  render() {
    return (
      <div>
        <Header fetchUsers={this.fetchUsers} />
        <ul>
          {this.state.items.map((item, i) => (
            <List
              key={i}
              name={'Name:' + item.name + ' ' + item.surname}
              gender={item.gender}
              region={item.region}
            />
          ))}
        </ul>

        <div key={this.state.users.name + this.state.users.surname + this.state.users.region}>
          <User
            mappedUser={this.state.users}
            clickUser={this.clickUser}
            stateUser={this.state.users}
          />
        </div>

        {this.state.users.name ? (
          <div>
            <img src={this.state.users.img} alt={this.state.users.name} />
            <p>{this.state.users.name}</p>
            <p>{this.state.users.surname}</p>
            <p>{this.state.users.gender}</p>
            <p>{this.state.users.region}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
