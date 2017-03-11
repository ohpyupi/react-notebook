import React from 'react';
import ReactDOM from 'react-dom';

import hfunc from '../hFunc';

export default class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			comment: {
			},
		};
	}
	componentWillMount() {
		console.log();
	}
	componentDidMount() {
		this.refs['date'].valueAsDate = hfunc.getCleanTime();
		this.refs['time'].valueAsDate = hfunc.getCleanTime();
		this.timeSync = setInterval(()=>{
			this.refs['time'].valueAsDate = hfunc.getCleanTime();
		}, 3000);
	}
	componentWillUnmount() {
		cleatInterval(this.timeSync);
	}
	_handleClick(e) {
		let comment = this.state.comment;
		comment.name = {
			first: ReactDOM.findDOMNode(this.refs.firstName).value,
			last: ReactDOM.findDOMNode(this.refs.lastName).value,
		};
		comment.subject = ReactDOM.findDOMNode(this.refs.subject).value;
		comment.body = ReactDOM.findDOMNode(this.refs.body).value;
		comment.contact = {
			email: ReactDOM.findDOMNode(this.refs.email).value,
			address: ReactDOM.findDOMNode(this.refs.address).value,
		};
		comment.date = ReactDOM.findDOMNode(this.refs.date).value;
		comment.time = ReactDOM.findDOMNode(this.refs.time).value;
		this.setState({
			comment: comment,
		});
		this.props.addComment(this.state.comment);
		for (var key in this.refs) {
			let type = this.refs[key].type;
			if (type === "text" || type === "textarea") {
				this.refs[key].value = '';
			} else if (type === "date") {
				this.refs[key].valueAsDate = hfunc.getCleanTime();
			} else if (type === "time") {
				this.refs[key].valueAsDate = hfunc.getCleanTime();
			}
		}
	}
	render() {
		return (
			<form className='comment form'>
				<div>
					<label>First Name</label>
					<input type='text' ref='firstName'/>
				</div>
				<div>
					<label>Last Name</label>
					<input type='text' ref='lastName'/>
				</div>
				<div>
					<label>Email</label>
					<input type='text' ref='email'/>
				</div>
				<div>
					<label>Address</label>
					<input type='text' ref='address'/>
				</div>
				<div>
					<label>Date</label>
					<input type='date' ref='date' disabled/>
				</div>
				<div>
					<label>Time</label>
					<input type='time' ref='time' disabled/>
				</div>
				<div>
					<label>Subject</label>
					<input type='text' ref='subject'/>
				</div>
				<div>
					<label>Body</label>
					<textarea type='text' ref='body'/>
				</div>
				<button type='button' onClick={e=>this._handleClick(e)}>Submit</button>
			</form>
		);
	}
}
