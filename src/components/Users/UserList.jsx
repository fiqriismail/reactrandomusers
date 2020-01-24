import React from 'react';

import HeaderTitle from './../shared/HeaderTitle';

function UserList() {
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
            <tr>
              <td className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/med/men/75.jpg"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="border rounded-circle shadow-sm"
                />
              </td>
              <td>Mr. Brad Gibson</td>
              <td>brad.gibson@example.com</td>
              <td>26</td>
            </tr>
            <tr>
              <td className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/med/men/75.jpg"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="border rounded-circle shadow-sm"
                />
              </td>
              <td>Mr. Brad Gibson</td>
              <td>brad.gibson@example.com</td>
              <td>26</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default UserList;
