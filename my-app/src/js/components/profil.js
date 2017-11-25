import React, {   Component} from 'react';


var user = {
  firstName: 'Arif',
  lastName: 'Mahmic',
  username: 'dybrom',
  tweets: 0,
  avatarUrl: 'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.0-9/12189112_10153658732269933_3129207259494805258_n.jpg?oh=f1927ffe1e2f7aa28778585aa41662c5&oe=5A8F948A'
};

export default class Profil extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-lg-6">
      <img src={user.avatarUrl}></img>
      </div>
      <div className="col-lg-6">

      <h3>{user.firstName + ' ' + user.lastName}</h3>
      <h3>{'@' + user.username}</h3>
      <h3>{'Tweets' + ' ' + user.tweets}</h3>
      </div>

      </div>
    );
  }
}
