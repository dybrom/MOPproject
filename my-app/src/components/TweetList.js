import React, {   Component} from 'react';
import Tweet from './Tweet';

//Definicija tweetList

export default class TweetList extends Component {
	constructor() {
		super();
		this.state = {
				
				tweets : [
			{
				id: 1111111111,
				text: "prvi todo",
				complete: false
			},
			{
				id: 22222222,
				text: "drugi todo",
				complete: false
			},
		],
		};
	}

 render() {
 		
 	const {tweets} = this.state;
 	var {counter} = this.props;
 	const nestoispisat = tweets.map((bla) => {

 		counter+=1;
 		console.log(bla.text);
 		console.log(counter);
 		
 		return <Tweet key={bla.id} {...bla} />;

 	})
    return (
      <div className="App">
      	
      	<ul>{nestoispisat} </ul>
      </div>
    );
  }
}