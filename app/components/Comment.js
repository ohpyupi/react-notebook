import React from 'react';

export default class Comment extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className='comment'>
				<h3 className='comment author'>{this.props.author}</h3>
				<p className='comment body'>{this.props.body}</p>
			</div>
		);
	}
}
