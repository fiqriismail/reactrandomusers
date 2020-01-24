import React from 'react';

import HeaderTitle from './../shared/HeaderTitle';

function UserDetails() {
  return (
    <React.Fragment>
      <HeaderTitle title="User Details" tagline="Details of user 1" />

      <div className="card" style={{ width: 256 }}>
        <img
          src="https://randomuser.me/api/portraits/med/men/76.jpg"
          className="card-img-top"
          width="256"
          height="256"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Mr. Brad Gibson (26)</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>brad.gibson@example.com</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserDetails;
