import React, {   Component} from 'react';




export default class Profil extends Component {
  render() {
const {firstName, lastName, username, avatarUrl, counter} = this.props;

    return (
      <div className="row">
      <div className="col-lg-6">
      <img src={avatarUrl} alt="alternate"></img>
      </div>
      <div className="col-lg-6">

      <h3>{firstName + ' ' + lastName}</h3>
      <h3>{'@' + username}</h3>
      <h3>{'Tweets: '  + counter}</h3>
      </div>

      </div>
    );
  }
}
