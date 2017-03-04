import React from 'react';

export default class Comment extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className='comment'>
				<h3 className='body'>[{this.props.comment.id}] {this.props.comment.subject}</h3>
				<h4 className='name'>{this.props.comment.name.first} {this.props.comment.name.last}</h4>
				<a href={'mailto:'+this.props.comment.contact.email}>{this.props.comment.contact.email}</a>
				<a href={'tel:'+this.props.comment.contact.phone}> {this.props.comment.contact.phone}</a>
				<a style={{'display': 'block'}} href='https://www.google.com' target="_blank">{this.props.comment.contact.address}</a>
				<p>{this.props.comment.date} {this.props.comment.time}</p>
				<p>{this.props.comment.body}</p>
			</div>
		);
	}
}
