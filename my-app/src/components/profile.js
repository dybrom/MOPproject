import React, {   Component} from 'react';




export default class Profile extends Component {
  render() {
const {firstName, lastName, username, avatarUrl, tweetsCount} = this.props;
    const fullName = firstName + ' ' + lastName;
    const showUsername = '@' + username;
    const numberOfTweets = 'Tweets: '  + tweetsCount;

    return (
      <div className="row">
      <div className="col-lg-6">
      <img src={avatarUrl} alt="alternate"></img>
      </div>
      <div className="col-lg-6">

      <h3>{fullName}</h3>
      <h3>{showUsername}</h3>
      <h3>{numberOfTweets}</h3>
      </div>

      </div>
    );
  }
}
