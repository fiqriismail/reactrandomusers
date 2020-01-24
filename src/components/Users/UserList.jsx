import React from 'react';

import HeaderTitle from './../shared/HeaderTitle';
import UserListItem from './UserListItem';

class UserList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTitle title="User List" tagline="All the users we can find" />
        <div className="container">
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
              <UserListItem
                fullname="Mr. Brad Gibson"
                profileUrl="https://randomuser.me/api/portraits/med/men/76.jpg"
                email="brad.gibson@example.com"
                age="26"
              />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
