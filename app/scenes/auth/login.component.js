import React from 'react';

export default class Login extends React.Component {
	constructor() {
		super();
	}
	render () {
		return (
			<div>
				<div>
					<label>Username</label>
					<input type='text' name='username'/>
				</div>
				<div>
					<label>Password</label>
					<input type='password' name='Password'/>
				</div>
				<a href='/auth/signup'>Create an account</a>
			</div>
		)
	}
}
