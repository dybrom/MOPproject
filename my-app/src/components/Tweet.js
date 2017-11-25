import React  from 'react';

export default class Tweet extends React.Component {
	render(){

		const {text} = this.props;
		return(
			<h2> nesto{text} {console.log(this.props.text)} </h2>

		);
	}
}