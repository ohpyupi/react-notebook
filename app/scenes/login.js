import React from 'react';

export default class Login extends React.Component {
	render() {
		return (
			<div>
				<h3>Login</h3>
				<form>
					<div>
						<label>Username</label>
						<input type='text' name='username'/>
					</div>
					<div>
						<label>Password</label>
						<input type='password' name='username'/>
					</div>
					<button type='button'>Submit</button>
				</form>
			</div>
		);
	}
}
