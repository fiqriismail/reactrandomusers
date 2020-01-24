import React from 'react';
import axios from 'axios';

import HeaderTitle from './../shared/HeaderTitle';

class UserDetails extends React.Component {
  state = {
    user: '',
  };

  componentDidMount() {
    const endPoint = 'https://randomuser.me/api';

    axios.get(endPoint).then(res => {
      const person = res.data.results[0];
      this.setState({ user: person });
    });
  }

  displayUser = () => {
    return (
      <div className="card" style={{ width: 256 }}>
        <img
          src={this.state.user.picture.large}
          className="card-img-top"
          width="256"
          height="256"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {this.state.user.name.title +
              ' ' +
              this.state.user.name.first +
              ' ' +
              this.state.user.name.last}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>{this.state.user.email}</p>
        </div>
      </div>
    );
  };

  loading = () => {
    return (
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <HeaderTitle
          title="User Details"
          tagline={'Details of user ' + this.props.match.params.id}
        />
        {this.state.user ? this.displayUser() : this.loading()}
      </React.Fragment>
    );
  }
}

export default UserDetails;
