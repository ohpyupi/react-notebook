import React from 'react';

import HFunc from '../../hFunc'

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.hFunc = new HFunc();
	}
	handleInputChange(e) {
		this.props.handleInputChange(e);
	}
	render() {
		return (
			<div>
				<div>
					<label>Username</label>
					<input type='text' name='username' value={this.props.user.username} onChange={(e)=>this.handleInputChange(e)} required/>
					<div>
						<span className='error'>{this.props.error.username}</span>
					</div>
				</div>
				<div>
					<label>Password</label>
					<input type='password' value={this.props.user.password} onChange={(e)=>this.handleInputChange(e)} name='password' required/>
					<div>
						<span className='error'>{this.props.error.password}</span>
					</div>
				</div>
				<div>
					<label>Confirm</label>
					<input type='password' value={this.props.user.confirm} onChange={(e)=>this.handleInputChange(e)} name='confirm' required/>
				</div>
			</div>
		);
	}
}
