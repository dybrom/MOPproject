import React  from 'react';
//import TodoStore from '../stores/TodoStore';
import moment from 'moment';



export default class Tweet extends React.Component {
	render(){

		const {text} = this.props;
		const {username, avatarUrl} = this.props;
		const{created_at} = this.props;
		return(
			<div className="tweet">
			<div className="container">

			<div className="col-lg-4">

			<img src={avatarUrl} alt="alternate"></img>

			</div>

			<div className="col-lg-8">

			<div className="row">
			<h3> {'@' +username + ' ' + moment(created_at).fromNow()}</h3>
			</div>
			<div className="row">
			<h2> {text}  </h2>
			</div>

			</div>
			</div>
			</div>
		);
	}
}