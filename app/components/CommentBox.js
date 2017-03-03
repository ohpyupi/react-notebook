import React from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';

import axios from 'axios';

export default class CommentBox extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: [],
		};
	}
	componentWillMount() {
		this._fetchComments();
	}
	render() {
		return (
			<div className='comment-box'>
				<CommentForm addComment={(comment)=>this._addComment(comment)}/>
				{this.state.comments.map(comment=>
					<Comment key={comment.id} comment={comment}/>
				)}
			</div>
		);
	}
	componentDidMount() {
	}
	_fetchComments() {
		axios.get('/api/comments')
		.then((res)=>{
			this.setState({comments: res.data});
		});
	}
	_addComment(comment) {
		let comments = this.state.comments;
		comment = JSON.parse(JSON.stringify(comment));
		comment.id = this.state.comments.length+1;
		this.setState({comments: this.state.comments.concat(comment)});
	}
}
