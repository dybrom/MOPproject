import React, {   Component} from 'react';
import Tweet from './Tweet';

//Definicija tweetList

export default class TweetList extends Component {
 render() {
 		
 	const {tweets} = this.props;
 	


 tweets.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.created_at) - new Date(a.created_at);
});

 	const printTweets = tweets.map((tweet) => {

 		return <Tweet key={tweet.id} {...tweet} username={this.props.username} avatarUrl={this.props.avatarUrl} />;

 	})
    return (
      <div className="Appa">
      	
      	<div> {printTweets} </div>
      </div>
    );
  }
}