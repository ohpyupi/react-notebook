import React from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';

export default class CommentBox extends React.Component {

	constructor() {
		super();
		this.state = {
			comments: [
				{
					id: 1, 
					name: {
						first: 'Hoseong',
						last: 'Lee',
					}, 
					subject: 'Supergentle Company',
					body: 'We will lead the world.',
					date: '2015-12-12',
					time: '11:10 PM',
					contact: {
						email: 'hlee@zoozler.com',
						phone: '123) 123 - 1234',
						address: 'Seoul, Republic of Korea',
					},
				},
			],
		};
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
	
	_addComment(comment) {
		let comments = this.state.comments;
		comment = JSON.parse(JSON.stringify(comment));
		comment.id = this.state.comments.length+1;
		this.setState({comments: this.state.comments.concat(comment)});
	}
}
