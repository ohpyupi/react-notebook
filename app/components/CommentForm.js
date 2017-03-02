import React from 'react';
import ReactDOM from 'react-dom';

export default class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			comment: {
				author: 'Andrew',
				body: '',
			},
		};
		this.commentBodyInput;
	}
	_handleClick(e) {
		let comment = this.state.comment;
		comment.body = ReactDOM.findDOMNode(this.refs.body).value;
		this.setState({
			comment: comment,
		});
		console.log(this.state.comment);
	}
	_handleChange(e) {
	}
	_addComment(e) {
	}
	render() {
		return (
			<form className='comment form'>
				<input type='text' ref='body'/>
				<button type='button' onClick={e=>this._handleClick(e)}>Submit</button>
			</form>
		);
	}
}
