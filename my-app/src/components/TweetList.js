import React, {   Component} from 'react';
import Tweet from './Tweet';
//import TodoStore from '../stores/TodoStore';
//Definicija tweetList

export default class TweetList extends Component {
 render() {
 		
 	const {tweets} = this.props;
 	


 tweets.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.created_at) - new Date(a.created_at);
});

 	const nestoispisat = tweets.map((bla) => {

 		
 		
 		
 		return <Tweet key={bla.id} {...bla} username={this.props.username} avatarUrl={this.props.avatarUrl} created_at={bla.created_at}/>;

 	})
    return (
      <div className="Appa">
      	
      	<div> {nestoispisat} </div>
      </div>
    );
  }
}