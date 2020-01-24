import React from 'react';
import { Link } from 'react-router-dom';

function UserListItem(props) {
  return (
    <tr>
      <td className="text-center">
        <img
          src={props.profileUrl}
          width="32"
          height="32"
          alt={props.fullname}
          className="border rounded-circle shadow-sm"
        />
      </td>
      <td>
        <Link to="/users/1">{props.fullname}</Link>
      </td>
      <td>{props.email}</td>
      <td>{props.age}</td>
    </tr>
  );
}

export default UserListItem;
