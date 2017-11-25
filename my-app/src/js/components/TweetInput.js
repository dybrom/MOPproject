import React, {   Component} from 'react';

//Definicija tweetInput komponente

export default class TweetInput extends Component {

  render() {
    return (
      <div class="dodavanjeTweeta">
      <form >
        
          <textarea cols="40" id="tekst" rows="3" placeholder="blabla"class="form-control" ></textarea>
        
      </form>
      </div>
      );
  }
}