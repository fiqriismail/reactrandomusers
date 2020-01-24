import React from 'react';

function UserListItem(props) {
  return (
    <tr>
      <td className="text-center">
        <img
          src={props.profileUrl}
          width="64"
          height="64"
          alt={props.fullname}
          className="border rounded-circle shadow-sm"
        />
      </td>
      <td>{props.fullname}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
    </tr>
  );
}

export default UserListItem;
