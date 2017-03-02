import React from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';

export default class CommentBox extends React.Component {

	constructor() {
		super();
		this.state = {
			comments: [
				{id: 1, author: 'Hoseong', body: 'Hello World',},
				{id: 2, author: 'Sri', body: 'We can do it!',},
			],
		};
	}

	render() {
		return (
			<div className='comment-box'>
				<CommentForm/>
				{this.state.comments.map(comment=>
					<Comment author={comment.author} body={comment.body} key={comment.id}/>
				)}
			</div>
		);
	}
	
	_deleteComment(comment) {
		
	}
}
