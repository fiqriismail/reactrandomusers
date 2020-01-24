import React from 'react';

function HeaderTitle(props) {
  return (
    <React.Fragment>
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.tagline}</p>
    </React.Fragment>
  );
}

export default HeaderTitle;
