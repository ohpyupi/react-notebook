import React from 'react';
import {UIRouter} from 'ui-router-react';

export default class Auth extends React.Component {
	constructor() {
		super();
	}
	componentWillMount() {
		this.stateService = this.props.transition.router.stateService;
	}
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
