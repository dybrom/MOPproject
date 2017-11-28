import React, {   Component} from 'react';
import '../App.css';
import Profile from './profile';
import TweetList from './TweetList';
import TweetInput from './TweetInput';


//App definicija komponente

export default class App extends Component {
constructor() {
    super();
    this.state = {
      firstName: 'Arif',
      lastName: 'Mahmic',
      username: 'dybrom',
      avatarUrl: 'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.0-9/12189112_10153658732269933_3129207259494805258_n.jpg?oh=f1927ffe1e2f7aa28778585aa41662c5&oe=5A8F948A',
      tweets : [
         {
            id: 1,
            created_at:"2017-10-26T13:27:14.664Z", 
            text: "first tweet"
          },
          {
            id: 2,
            created_at:"2017-11-26T13:27:14.664Z", 
            text: "second tweet"
          },
        ]
      };
  } 
    handleSubmit(val) {
      this.setState({
        tweets: this.state.tweets.concat([{id: this.state.tweets.length+1, text: val, created_at: (new Date()).toISOString()}])
      })
    }

    render() {
      let tweetsCount = this.state.tweets.length;
      return ( 
        <div className = "App">  
          <div className = "row">
            <div className = "col-lg-4">
              <div className = "profilebox">
                <Profile tweetsCount={tweetsCount} username={this.state.username} 
                lastName={this.state.lastName} avatarUrl={this.state.avatarUrl} firstName={this.state.firstName} />
              </div>
              </div>
            <div className = "col-lg-8">
              <div>
                <TweetInput handleSubmit={(val) => this.handleSubmit(val)} /> 
              </div>   
              <div className="tweetsss">
                <TweetList tweets={this.state.tweets} username={this.state.username} avatarUrl={this.state.avatarUrl} />
              </div>
            </div>
          </div>
        </div>
        );
    }
}

