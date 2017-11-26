import React, {   Component} from 'react';

//Definicija tweetInput komponente

export default class TweetInput extends Component {
	onPressEnter(e) {
		if (e.charCode === 13) {
			var textarea = this.refs.textarea;
			this.props.handleSubmit(textarea.value);
			textarea.value = '';
			 e.preventDefault();
		}
	}
  render() {
    return (
      <div className="dodavanjeTweeta">
      <form >
        
          <textarea onKeyPress={(e) => this.onPressEnter(e)} ref="textarea" cols="40" id="tekst" rows="3" placeholder="blabla" className="form-control" ></textarea>
        
      </form>
      </div>
      );
  }
}