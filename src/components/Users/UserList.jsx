import React from 'react';
import axios from 'axios';

import HeaderTitle from './../shared/HeaderTitle';
import UserListItem from './UserListItem';

class UserList extends React.Component {
  state = {
    users: [],
    numberOfUsers: 2,
    isLoaded: false,
  };

  componentDidMount() {
    const endPoint =
      'https://randomuser.me/api/?results=' + this.state.numberOfUsers;

    axios.get(endPoint).then(res => {
      const people = res.data.results;
      this.setState({ users: people });
    });
  }

  populateUsers = () => {
    const currentUsers = this.state.users;

    if (currentUsers.length > 0) {
      console.log(currentUsers);
      return currentUsers.map(user => {
        return (
          <UserListItem
            key={user.login.uuid}
            userid={user.login.uuid}
            fullname={
              user.name.title + ' ' + user.name.first + ' ' + user.name.last
            }
            profileUrl={user.picture.thumbnail}
            email={user.email}
            age={user.dob.age}
          />
        );
      });
    }
  };

  componentDidUpdate() {
    const endPoint =
      'https://randomuser.me/api/?results=' + this.state.numberOfUsers;
    if (!this.state.isLoaded) {
      axios.get(endPoint).then(res => {
        const people = res.data.results;
        this.setState({ users: people, isLoaded: true });
      });
    }
  }

  changeNumberOfUsersHandler = () => {
    this.setState({ numberOfUsers: 5, isLoaded: false });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderTitle title="User List" tagline="All the users we can find" />
        <div className="container">
          <button
            className="btn btn-primary mb-3"
            onClick={this.changeNumberOfUsersHandler}
          >
            Load 5 Users
          </button>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Avatar</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.length > 0 ? (
                this.populateUsers()
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
