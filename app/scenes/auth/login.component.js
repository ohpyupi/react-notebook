import React from 'react';

import hFunc from '../../hFunc'

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	handleInputChange(e) {
		this.props.handleInputChange(e);
	}
	handleLogin(e) {
		this.props.handleLogin(e);
	}
	render () {
		return (
			<div>
				<div>
					<label>Username</label>
					<input type='text' name='username' value={this.props.user.username} onChange={e=>this.handleInputChange(e)}/>
					<div>
						<span className='error'>{this.props.error.username}</span>
					</div>
				</div>
				<div>
					<label>Password</label>
					<input type='password' name='password' value={this.props.user.password} onChange={e=>this.handleInputChange(e)}/>
					<div>
						<span className='error'>{this.props.error.password}</span>
					</div>
				</div>
				<a href='/auth/signup'>Create an account</a>
				<div>
					<button type='button' onClick={e=>this.handleLogin(e)}>Submit</button>
				</div>
			</div>
		)
	}
}
