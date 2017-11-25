import React, {   Component} from 'react';

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
const{ tweets} = this.state;

const TodoComponents = tweets.map((tweet) => {
	return <TweetList key={tweet.id} {...tweet} />;
});

    return (
      <div className="listaTweeta">
        
      <h1>{TodoComponents}</h1>

    
      </div>
    );
  }
}